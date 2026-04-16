param(
    [string]$Python = "C:\Users\KANEKI\AppData\Local\Programs\Python\Python313\python.exe",
    [string]$OutputDir = ".tmp_site_validation"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$siteDir = Join-Path $repoRoot $OutputDir

if (Test-Path -LiteralPath $siteDir) {
    Remove-Item -LiteralPath $siteDir -Recurse -Force
}

$mkdocsModuleCheck = & $Python -c "import mkdocs" 2>$null
if ($LASTEXITCODE -ne 0) {
    throw "MkDocs is not available for '$Python'. Install dependencies first with 'pip install -r requirements.txt'."
}

Push-Location $repoRoot
try {
    & $Python -m mkdocs build --clean --site-dir $OutputDir
    if ($LASTEXITCODE -ne 0) {
        throw "MkDocs validation build failed."
    }

    Write-Host "Validation build completed:" $siteDir
}
finally {
    Pop-Location
}
