# One-Click Disk Cleanup Script for OpenClaw
# Safely removes temporary files to free disk space
# Generated: 2026-07-07 02:39 EDT
# Target: Critical low disk space (<10% free)

# Safety Note: This script only deletes known temporary/cache files.
# It does NOT touch documents, projects, downloads, or user data.

<#
.SYNOPSIS
    Performs safe cleanup of temporary files to recover disk space
.DESCRIPTION
    Clears:
    - User temp folders (%TEMP%, %TMP%)
    - Application temp folders
    - Browser caches (Chrome, Firefox, Edge)
    - Windows Update temporary files (if accessible)
    - Reports space recovered
.NOTES
    Run as regular user (no admin needed for most operations)
    Creates log file in $env:TEMP\opencleanup_*.log
#>

# Initialize logging
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$logPath = Join-Path $env:TEMP "opencleanup_$timestamp.log"
function Write-Log {
    param([string]$message)
    $logEntry = "[${timestamp}] $message"
    Write-Host $logEntry
    Add-Content -Path $logPath -Value $logEntry
}

Write-Log "=== OpenClaw Disk Cleanup Started ==="
Write-Log "Host: $env:COMPUTERNAME"
Write-Log "User: $env:USERNAME"

# Function to get free space in GB
function Get-FreeSpaceGB {
    param([string]$drive = "C:")
    $driveInfo = Get-PSDrive -Name $drive.Replace(":","") -ErrorAction SilentlyContinue
    if ($driveInfo) {
        return [math]::Round($driveInfo.Free/1GB, 2)
    }
    return 0
}

# Record initial state
$initialFree = Get-FreeSpaceGB
Write-Log "Initial free space: $initialFree GB"

# Initialize total bytes deleted
$totalDeletedBytes = 0

# Function to delete folder contents and track size
function Clear-Folder {
    param([string]$path, [string]$description)
    if (-not (Test-Path $path)) {
        Write-Log "SKIP: $description not found at $path"
        return
    }
    
    try {
        # Get size before deletion
        $sizeBefore = (Get-ChildItem -Path $path -Recurse -File -ErrorAction SilentlyContinue | 
                      Measure-Object -Property Length -Sum).Sum
        
        if ($sizeBefore -eq $null) { $sizeBefore = 0 }
        
        # Delete contents
        Get-ChildItem -Path $path -Recurse -ErrorAction SilentlyContinue | 
            Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
        
        # Get size after (should be near zero)
        $sizeAfter = (Get-ChildItem -Path $path -Recurse -File -ErrorAction SilentlyContinue | 
                     Measure-Object -Property Length -Sum).Sum
        if ($sizeAfter -eq $null) { $sizeAfter = 0 }
        
        $deleted = $sizeBefore - $sizeAfter
        $totalDeletedBytes += $deleted
        
        if ($deleted -gt 0) {
            Write-Log "CLEARED: $description - Recovered [${deleted} bytes] ([{0:N2}] MB)" -f ($deleted/1MB)
        } else {
            Write-Log "CLEARED: $description - No files found"
        }
    } catch {
        Write-Log "ERROR clearing $description: $_"
    }
}

# 1. User Temp Folders
Write-Log "`n--- Cleaning User Temp Folders ---"
Clear-Folder -path "$env:TEMP" -description "User TEMP (%TEMP%)"
Clear-Folder -path "$env:TMP" -description "User TMP (%TMP%)"
Clear-Folder -path "$env:LOCALAPPDATA\Temp" -description "Local AppData Temp"

# 2. Browser Caches
Write-Log "`n--- Cleaning Browser Caches ---"
# Chrome
$chromeCache = Join-Path $env:LOCALAPPDATA "Google\Chrome\User Data\Default\Cache"
Clear-Folder -path $chromeCache -description "Chrome Cache"
# Chrome Code Cache
$chromeCodeCache = Join-Path $env:LOCALAPPDATA "Google\Chrome\User Data\Default\Code Cache"
Clear-Folder -path $chromeCodeCache -description "Chrome Code Cache"
# Edge
$edgeCache = Join-Path $env:LOCALAPPDATA "Microsoft\Edge\User Data\Default\Cache"
Clear-Folder -path $edgeCache -description "Edge Cache"
# Firefox
$firefoxCache = Join-Path $env:APPDATA "Mozilla\Firefox\Profiles"
if (Test-Path $firefoxCache) {
    Get-ChildItem -Path $firefoxCache -Directory -ErrorAction SilentlyContinue | 
        ForEach-Object {
            $profileCache = Join-Path $_.FullName "cache2"
            Clear-Folder -path $profileCache -description "Firefox Cache ($($_.Name))"
        }
}

# 3. .NET Temporary ASP.NET Files
Write-Log "`n--- Cleaning .NET Temp ---"
$netTemp = Join-Path $env:WINDIR "Microsoft.NET\Framework64\v4.0.30319\Temporary ASP.NET Files"
Clear-Folder -path $netTemp -description ".NET Temp ASP.NET Files (v4)"
# Also check v2.0
$netTemp2 = Join-Path $env:WINDIR "Microsoft.NET\Framework\v2.0.50727\Temporary ASP.NET Files"
Clear-Folder -path $netTemp2 -description ".NET Temp ASP.NET Files (v2)"

# 4. Windows Update Cleanup (User-accessible parts)
Write-Log "`n--- Cleaning Windows Update Temp ---"
$wuTemp = Join-Path $env:WINDIR "SoftwareDistribution\Download"
Clear-Folder -path $wuTemp -description "Windows Update Download Cache"

# 5. Icon Cache (can be rebuilt)
Write-Log "`n--- Cleaning Icon Cache ---"
$iconCache = Join-Path $env:LOCALAPPDATA "IconCache.db"
if (Test-Path $iconCache) {
    try {
        $size = (Get-Item $iconCache).Length
        Remove-Item -Path $iconCache -Force -ErrorAction SilentlyContinue
        $totalDeletedBytes += $size
        Write-Log "CLEARED: Icon Cache - Recovered [$size bytes] ([{0:N2}] MB)" -f ($size/1MB)
    } catch {
        Write-Log "ERROR clearing Icon Cache: $_"
    }
}

# 6. Recent Files (optional - can be useful but safe to clear)
Write-Log "`n--- Cleaning Recent Files ---"
$recent = Join-Path $env:APPDATA "Microsoft\Windows\Recent"
Clear-Folder -path $recent -description "Recent Files Shortcuts"

# Final report
$finalFree = Get-FreeSpaceGB
$recoveredGB = [math]::Round($totalDeletedBytes/1GB, 2)
$freedPercent = [math]::Round(($finalFree - $initialFree)/$initialFree * 100, 1)

Write-Log "`n=== Cleanup Summary ===
Initial free space: $initialFree GB
Final free space: $finalFree GB
Space recovered: $recovered GB ($freedPercent% increase)
Log file: $logPath"

# Also output to console for immediate visibility
Write-Host "`n=== OpenClaw Disk Cleanup Completed ==="
Write-Host "Initial free space: $initialFree GB"
Write-Host "Final free space: $finalFree GB"
Write-Host "Space recovered: $recovered GB"
Write-Host "Log saved to: $logPath"
Write-Host ""
Write-Host "To see details, run: Get-Content $logPath"

# Optional: Suggest next steps
if ($finalFree -lt 10) {
    Write-Warning "WARNING: Free space is still below 10% ($finalFree GB). Consider:"
    Write-Warning "  - Moving large files from Documents/Downloads/Videos to external storage"
    Write-Warning "  - Uninstalling unused applications via Settings -> Apps"
    Write-Warning "  - Running Disk Cleanup (cleanmgr.exe) -> 'Clean up system files'"
} else {
    Write-Host "SUCCESS: Free space is now above 10%. System should operate normally."
}

Write-Log "=== Cleanup Finished ==="