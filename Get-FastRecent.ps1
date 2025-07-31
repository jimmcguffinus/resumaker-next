param (
    [int]$TopN = 10,
    [string]$Path = "."
)

# Extensions we're interested in (authored source)
$validExtensions = @(
    '.ts', '.tsx', '.js', '.jsx',
    '.css', '.scss', '.json',
    '.cjs', '.mjs', '.md', '.rules'
)

# Folder segments to exclude
$excludeDirs = @(
    '\.next\', '\.firebase\', '\node_modules\', '\out\', '\dist\', '\build\', '\lib\'
)

# Extensions to ignore (build artifacts)
$excludeExtensions = @(
    '.map', '.nft.json', '.rsc', '.meta'
)

Get-ChildItem -Path $Path -Recurse -File -Force -ErrorAction SilentlyContinue |
    Where-Object {
        $ext = $_.Extension.ToLower()
        $full = $_.FullName.ToLower()
        $isCode = $validExtensions -contains $ext
        $isNotJunk = $excludeExtensions -notcontains $ext
        $isNotInExcludedFolder = $true

        foreach ($badDir in $excludeDirs) {
            if ($full -like "*$badDir*") {
                $isNotInExcludedFolder = $false
                break
            }
        }

        return $isCode -and $isNotJunk -and $isNotInExcludedFolder
    } |
    Sort-Object LastWriteTime -Descending -Top $TopN |
    Select-Object LastWriteTime, FullName
