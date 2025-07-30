# 🔍 Resume Maker Source Code Dump

Generated: 2025-07-30 12:25:57

## Project: Next.js Resume Generator with PDF Export


## File: package.json

```json
{
  "name": "resumaker-next",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.1",
    "autoprefixer": "10.4.16",
    "lucide-react": "^0.534.0",
    "next": "15.4.5",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.61.1",
    "tailwindcss": "3.4.5",
    "zod": "^4.0.13"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  }
}

```n

## File: package-lock.json

```json
{
  "name": "resumaker-next",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "resumaker-next",
      "version": "0.1.0",
      "dependencies": {
        "@hookform/resolvers": "^5.2.1",
        "@react-pdf/renderer": "^4.3.0",
        "@types/jspdf": "^1.3.3",
        "autoprefixer": "10.4.16",
        "html2canvas": "1.4.1",
        "jspdf": "^3.0.1",
        "lucide-react": "^0.534.0",
        "next": "15.4.5",
        "react": "19.1.0",
        "react-dom": "19.1.0",
        "react-hook-form": "^7.61.1",
        "tailwindcss": "3.4.5",
        "zod": "^4.0.13"
      },
      "devDependencies": {
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.28.2",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.28.2.tgz",
      "integrity": "sha512-KHp2IflsnGywDjBWDkR9iEqiWSpc8GIi0lgTT3mOElT0PP1tG26P4tmFI2YvAdzgq9RGyoHZQEIEdZy6Ec5xCA==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.4.5.tgz",
      "integrity": "sha512-++LApOtY0pEEz1zrd9vy1/zXVaVJJ/EbAF3u0fXIzPJEDtnITsBGbbK0EkM72amhl/R5b+5xx0Y/QhcVOpuulg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@hookform/resolvers": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/@hookform/resolvers/-/resolvers-5.2.1.tgz",
      "integrity": "sha512-u0+6X58gkjMcxur1wRWokA7XsiiBJ6aK17aPZxhkoYiK5J+HcTx0Vhu9ovXe6H+dVpO6cjrn2FkJTryXEMlryQ==",
      "license": "MIT",
      "dependencies": {
        "@standard-schema/utils": "^0.3.0"
      },
      "peerDependencies": {
        "react-hook-form": "^7.55.0"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.3.tgz",
      "integrity": "sha512-ryFMfvxxpQRsgZJqBd4wsttYQbCxsJksrv9Lw/v798JcQ8+w84mBWuXwl+TT0WJ/WrYOLaYpwQXi3sA9nTIaIg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.3.tgz",
      "integrity": "sha512-yHpJYynROAj12TA6qil58hmPmAwxKKC7reUqtGLzsOHfP7/rniNGTL8tjWX6L3CTV4+5P4ypcS7Pp+7OB+8ihA==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.0.tgz",
      "integrity": "sha512-sBZmpwmxqwlqG9ueWFXtockhsxefaV6O84BMOrhtg/YqbTaRdqDE7hxraVE3y6gVM4eExmfzW4a8el9ArLeEiQ==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.0.tgz",
      "integrity": "sha512-M64XVuL94OgiNHa5/m2YvEQI5q2cl9d/wk0qFTDVXcYzi43lxuiFTftMR1tOnFQovVXNZJ5TURSDK2pNe9Yzqg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.0.tgz",
      "integrity": "sha512-mWd2uWvDtL/nvIzThLq3fr2nnGfyr/XMXlq8ZJ9WMR6PXijHlC3ksp0IpuhK6bougvQrchUAfzRLnbsen0Cqvw==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.0.tgz",
      "integrity": "sha512-RXwd0CgG+uPRX5YYrkzKyalt2OJYRiJQ8ED/fi1tq9WQW2jsQIn0tqrlR5l5dr/rjqq6AHAxURhj2DVjyQWSOA==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.0.tgz",
      "integrity": "sha512-Xod/7KaDDHkYu2phxxfeEPXfVXFKx70EAFZ0qyUdOjCcxbjqyJOEUpDe6RIyaunGxT34Anf9ue/wuWOqBW2WcQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.0.tgz",
      "integrity": "sha512-eMKfzDxLGT8mnmPJTNMcjfO33fLiTDsrMlUVcp6b96ETbnJmd4uvZxVJSKPQfS+odwfVaGifhsB07J1LynFehw==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.0.tgz",
      "integrity": "sha512-ZW3FPWIc7K1sH9E3nxIGB3y3dZkpJlMnkk7z5tu1nSkBoCgw2nSRTFHI5pB/3CQaJM0pdzMF3paf9ckKMSE9Tg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.0.tgz",
      "integrity": "sha512-UG+LqQJbf5VJ8NWJ5Z3tdIe/HXjuIdo4JeVNADXBFuG7z9zjoegpzzGIyV5zQKi4zaJjnAd2+g2nna8TZvuW9Q==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.0.tgz",
      "integrity": "sha512-SRYOLR7CXPgNze8akZwjoGBoN1ThNZoqpOgfnOxmWsklTGVfJiGJoC/Lod7aNMGA1jSsKWM1+HRX43OP6p9+6Q==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.3.tgz",
      "integrity": "sha512-oBK9l+h6KBN0i3dC8rYntLiVfW8D8wH+NPNT3O/WBHeW0OQWCjfWksLUaPidsrDKpJgXp3G3/hkmhptAW0I3+A==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.3.tgz",
      "integrity": "sha512-QdrKe3EvQrqwkDrtuTIjI0bu6YEJHTgEeqdzI3uWJOH6G1O8Nl1iEeVYRGdj1h5I21CqxSvQp1Yv7xeU3ZewbA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.3.tgz",
      "integrity": "sha512-GLtbLQMCNC5nxuImPR2+RgrviwKwVql28FWZIW1zWruy6zLgA5/x2ZXk3mxj58X/tszVF69KK0Is83V8YgWhLA==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.3.tgz",
      "integrity": "sha512-3gahT+A6c4cdc2edhsLHmIOXMb17ltffJlxR0aC2VPZfwKoTGZec6u5GrFgdR7ciJSsHT27BD3TIuGcuRT0KmQ==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.3.tgz",
      "integrity": "sha512-8kYso8d806ypnSq3/Ly0QEw90V5ZoHh10yH0HnrzOCr6DKAPI6QVHvwleqMkVQ0m+fc7EH8ah0BB0QPuWY6zJQ==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.3.tgz",
      "integrity": "sha512-vAjbHDlr4izEiXM1OTggpCcPg9tn4YriK5vAjowJsHwdBIdx0fYRsURkxLG2RLm9gyBq66gwtWI8Gx0/ov+JKQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.3.tgz",
      "integrity": "sha512-gCWUn9547K5bwvOn9l5XGAEjVTTRji4aPTqLzGXHvIr6bIDZKNTA34seMPgM0WmSf+RYBH411VavCejp3PkOeQ==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.3.tgz",
      "integrity": "sha512-+CyRcpagHMGteySaWos8IbnXcHgfDn7pO2fiC2slJxvNq9gDipYBN42/RagzctVRKgxATmfqOSulgZv5e1RdMg==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.4.4"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.3.tgz",
      "integrity": "sha512-MjnHPnbqMXNC2UgeLJtX4XqoVHHlZNd+nPt1kRPmj63wURegwBhZlApELdtxM2OIZDRv/DFtLcNhVbd1z8GYXQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.3.tgz",
      "integrity": "sha512-xuCdhH44WxuXgOM714hn4amodJMZl3OEvf0GVTm0BEyMeA2to+8HEdRPShH0SLYptJY1uBw+SCFP9WVQi1Q/cw==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.3.tgz",
      "integrity": "sha512-OWwz05d++TxzLEv4VnsTz5CmZ6mI6S05sfQGEMrNrQcOEERbX46332IvE7pO/EUiw7jUrrS40z/M7kPyjfl04g==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.12",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.12.tgz",
      "integrity": "sha512-OuLGC46TjB5BbN1dH8JULVVZY4WTdkF7tV9Ys6wLL1rubZnCMstOhNHueU5bLCrnRuDhKPDM4g6sw4Bel5Gzqg==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.4.tgz",
      "integrity": "sha512-VT2+G1VQs/9oz078bLrYbecdZKs912zQlkelYpuf+SXF+QvZDYJlbx/LSx+meSAwdDFnF8FVXW92AVjjkVmgFw==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.29",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.29.tgz",
      "integrity": "sha512-uw6guiW/gcAGPDhLmd77/6lW8QLeiV5RUTsAX46Db6oLhGaVj4lhnPwb184s1bkc8kdVg/+h988dro8GRDpmYQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@next/env": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-15.4.5.tgz",
      "integrity": "sha512-ruM+q2SCOVCepUiERoxOmZY9ZVoecR3gcXNwCYZRvQQWRjhOiPJGmQ2fAiLR6YKWXcSAh7G79KEFxN3rwhs4LQ==",
      "license": "MIT"
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-15.4.5.tgz",
      "integrity": "sha512-84dAN4fkfdC7nX6udDLz9GzQlMUwEMKD7zsseXrl7FTeIItF8vpk1lhLEnsotiiDt+QFu3O1FVWnqwcRD2U3KA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-15.4.5.tgz",
      "integrity": "sha512-CL6mfGsKuFSyQjx36p2ftwMNSb8PQog8y0HO/ONLdQqDql7x3aJb/wB+LA651r4we2pp/Ck+qoRVUeZZEvSurA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-15.4.5.tgz",
      "integrity": "sha512-1hTVd9n6jpM/thnDc5kYHD1OjjWYpUJrJxY4DlEacT7L5SEOXIifIdTye6SQNNn8JDZrcN+n8AWOmeJ8u3KlvQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-15.4.5.tgz",
      "integrity": "sha512-4W+D/nw3RpIwGrqpFi7greZ0hjrCaioGErI7XHgkcTeWdZd146NNu1s4HnaHonLeNTguKnL2Urqvj28UJj6Gqw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.4.5.tgz",
      "integrity": "sha512-N6Mgdxe/Cn2K1yMHge6pclffkxzbSGOydXVKYOjYqQXZYjLCfN/CuFkaYDeDHY2VBwSHyM2fUjYBiQCIlxIKDA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.4.5.tgz",
      "integrity": "sha512-YZ3bNDrS8v5KiqgWE0xZQgtXgCTUacgFtnEgI4ccotAASwSvcMPDLua7BWLuTfucoRv6mPidXkITJLd8IdJplQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-15.4.5.tgz",
      "integrity": "sha512-9Wr4t9GkZmMNcTVvSloFtjzbH4vtT4a8+UHqDoVnxA5QyfWe6c5flTH1BIWPGNWSUlofc8dVJAE7j84FQgskvQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-15.4.5.tgz",
      "integrity": "sha512-voWk7XtGvlsP+w8VBz7lqp8Y+dYw/MTI4KeS0gTVtfdhdJ5QwhXLmNrndFOin/MDoCvUaLWMkYKATaCoUkt2/A==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@react-pdf/fns": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@react-pdf/fns/-/fns-3.1.2.tgz",
      "integrity": "sha512-qTKGUf0iAMGg2+OsUcp9ffKnKi41RukM/zYIWMDJ4hRVYSr89Q7e3wSDW/Koqx3ea3Uy/z3h2y3wPX6Bdfxk6g==",
      "license": "MIT"
    },
    "node_modules/@react-pdf/font": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@react-pdf/font/-/font-4.0.2.tgz",
      "integrity": "sha512-/dAWu7Y2RD1RxarDZ9SkYPHgBYOhmcDnet4W/qN/m8k+A2Hr3ja54GymSR7GGxWBtxjKtNauVKrTa9LS1n8WUw==",
      "license": "MIT",
      "dependencies": {
        "@react-pdf/pdfkit": "^4.0.3",
        "@react-pdf/types": "^2.9.0",
        "fontkit": "^2.0.2",
        "is-url": "^1.2.4"
      }
    },
    "node_modules/@react-pdf/image": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/@react-pdf/image/-/image-3.0.3.tgz",
      "integrity": "sha512-lvP5ryzYM3wpbO9bvqLZYwEr5XBDX9jcaRICvtnoRqdJOo7PRrMnmB4MMScyb+Xw10mGeIubZAAomNAG5ONQZQ==",
      "license": "MIT",
      "dependencies": {
        "@react-pdf/png-js": "^3.0.0",
        "jay-peg": "^1.1.1"
      }
    },
    "node_modules/@react-pdf/layout": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/@react-pdf/layout/-/layout-4.4.0.tgz",
      "integrity": "sha512-Aq+Cc6JYausWLoks2FvHe3PwK9cTuvksB2uJ0AnkKJEUtQbvCq8eCRb1bjbbwIji9OzFRTTzZij7LzkpKHjIeA==",
      "license": "MIT",
      "dependencies": {
        "@react-pdf/fns": "3.1.2",
        "@react-pdf/image": "^3.0.3",
        "@react-pdf/primitives": "^4.1.1",
        "@react-pdf/stylesheet": "^6.1.0",
        "@react-pdf/textkit": "^6.0.0",
        "@react-pdf/types": "^2.9.0",
        "emoji-regex": "^10.3.0",
        "queue": "^6.0.1",
        "yoga-layout": "^3.2.1"
      }
    },
    "node_modules/@react-pdf/layout/node_modules/emoji-regex": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.4.0.tgz",
      "integrity": "sha512-EC+0oUMY1Rqm4O6LLrgjtYDvcVYTy7chDnM4Q7030tP4Kwj3u/pR6gP9ygnp2CJMK5Gq+9Q2oqmrFJAz01DXjw==",
      "license": "MIT"
    },
    "node_modules/@react-pdf/pdfkit": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/@react-pdf/pdfkit/-/pdfkit-4.0.3.tgz",
      "integrity": "sha512-k+Lsuq8vTwWsCqTp+CCB4+2N+sOTFrzwGA7aw3H9ix/PDWR9QksbmNg0YkzGbLAPI6CeawmiLHcf4trZ5ecLPQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.20.13",
        "@react-pdf/png-js": "^3.0.0",
        "browserify-zlib": "^0.2.0",
        "crypto-js": "^4.2.0",
        "fontkit": "^2.0.2",
        "jay-peg": "^1.1.1",
        "linebreak": "^1.1.0",
        "vite-compatible-readable-stream": "^3.6.1"
      }
    },
    "node_modules/@react-pdf/png-js": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@react-pdf/png-js/-/png-js-3.0.0.tgz",
      "integrity": "sha512-eSJnEItZ37WPt6Qv5pncQDxLJRK15eaRwPT+gZoujP548CodenOVp49GST8XJvKMFt9YqIBzGBV/j9AgrOQzVA==",
      "license": "MIT",
      "dependencies": {
        "browserify-zlib": "^0.2.0"
      }
    },
    "node_modules/@react-pdf/primitives": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/@react-pdf/primitives/-/primitives-4.1.1.tgz",
      "integrity": "sha512-IuhxYls1luJb7NUWy6q5avb1XrNaVj9bTNI40U9qGRuS6n7Hje/8H8Qi99Z9UKFV74bBP3DOf3L1wV2qZVgVrQ==",
      "license": "MIT"
    },
    "node_modules/@react-pdf/reconciler": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@react-pdf/reconciler/-/reconciler-1.1.4.tgz",
      "integrity": "sha512-oTQDiR/t4Z/Guxac88IavpU2UgN7eR0RMI9DRKvKnvPz2DUasGjXfChAdMqDNmJJxxV26mMy9xQOUV2UU5/okg==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4.1.1",
        "scheduler": "0.25.0-rc-603e6108-20241029"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/@react-pdf/reconciler/node_modules/scheduler": {
      "version": "0.25.0-rc-603e6108-20241029",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.25.0-rc-603e6108-20241029.tgz",
      "integrity": "sha512-pFwF6H1XrSdYYNLfOcGlM28/j8CGLu8IvdrxqhjWULe2bPcKiKW4CV+OWqR/9fT52mywx65l7ysNkjLKBda7eA==",
      "license": "MIT"
    },
    "node_modules/@react-pdf/render": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@react-pdf/render/-/render-4.3.0.tgz",
      "integrity": "sha512-MdWfWaqO6d7SZD75TZ2z5L35V+cHpyA43YNRlJNG0RJ7/MeVGDQv12y/BXOJgonZKkeEGdzM3EpAt9/g4E22WA==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.20.13",
        "@react-pdf/fns": "3.1.2",
        "@react-pdf/primitives": "^4.1.1",
        "@react-pdf/textkit": "^6.0.0",
        "@react-pdf/types": "^2.9.0",
        "abs-svg-path": "^0.1.1",
        "color-string": "^1.9.1",
        "normalize-svg-path": "^1.1.0",
        "parse-svg-path": "^0.1.2",
        "svg-arc-to-cubic-bezier": "^3.2.0"
      }
    },
    "node_modules/@react-pdf/renderer": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@react-pdf/renderer/-/renderer-4.3.0.tgz",
      "integrity": "sha512-28gpA69fU9ZQrDzmd5xMJa1bDf8t0PT3ApUKBl2PUpoE/x4JlvCB5X66nMXrfFrgF2EZrA72zWQAkvbg7TE8zw==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.20.13",
        "@react-pdf/fns": "3.1.2",
        "@react-pdf/font": "^4.0.2",
        "@react-pdf/layout": "^4.4.0",
        "@react-pdf/pdfkit": "^4.0.3",
        "@react-pdf/primitives": "^4.1.1",
        "@react-pdf/reconciler": "^1.1.4",
        "@react-pdf/render": "^4.3.0",
        "@react-pdf/types": "^2.9.0",
        "events": "^3.3.0",
        "object-assign": "^4.1.1",
        "prop-types": "^15.6.2",
        "queue": "^6.0.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/@react-pdf/stylesheet": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/@react-pdf/stylesheet/-/stylesheet-6.1.0.tgz",
      "integrity": "sha512-BGZ2sYNUp38VJUegjva/jsri3iiRGnVNjWI+G9dTwAvLNOmwFvSJzqaCsEnqQ/DW5mrTBk/577FhDY7pv6AidA==",
      "license": "MIT",
      "dependencies": {
        "@react-pdf/fns": "3.1.2",
        "@react-pdf/types": "^2.9.0",
        "color-string": "^1.9.1",
        "hsl-to-hex": "^1.0.0",
        "media-engine": "^1.0.3",
        "postcss-value-parser": "^4.1.0"
      }
    },
    "node_modules/@react-pdf/textkit": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@react-pdf/textkit/-/textkit-6.0.0.tgz",
      "integrity": "sha512-fDt19KWaJRK/n2AaFoVm31hgGmpygmTV7LsHGJNGZkgzXcFyLsx+XUl63DTDPH3iqxj3xUX128t104GtOz8tTw==",
      "license": "MIT",
      "dependencies": {
        "@react-pdf/fns": "3.1.2",
        "bidi-js": "^1.0.2",
        "hyphen": "^1.6.4",
        "unicode-properties": "^1.4.1"
      }
    },
    "node_modules/@react-pdf/types": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/@react-pdf/types/-/types-2.9.0.tgz",
      "integrity": "sha512-ckj80vZLlvl9oYrQ4tovEaqKWP3O06Eb1D48/jQWbdwz1Yh7Y9v1cEmwlP8ET+a1Whp8xfdM0xduMexkuPANCQ==",
      "license": "MIT",
      "dependencies": {
        "@react-pdf/font": "^4.0.2",
        "@react-pdf/primitives": "^4.1.1",
        "@react-pdf/stylesheet": "^6.1.0"
      }
    },
    "node_modules/@standard-schema/utils": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz",
      "integrity": "sha512-e7Mew686owMaPJVNNLs55PUvgz371nKgwsc4vxE49zsODpJEnxgxRo2y/OKrqueavXgZNMDVj3DdHFlaSAeU8g==",
      "license": "MIT"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@types/jspdf": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@types/jspdf/-/jspdf-1.3.3.tgz",
      "integrity": "sha512-DqwyAKpVuv+7DniCp2Deq1xGvfdnKSNgl9Agun2w6dFvR5UKamiv4VfYUgcypd8S9ojUyARFIlZqBrYrBMQlew==",
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.19.9",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.9.tgz",
      "integrity": "sha512-cuVNgarYWZqxRJDQHEB58GEONhOK79QVR/qYx4S7kcUObQvUwvFnYxJuuHUKm2aieN9X3yZB4LZsuYNU1Qphsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/raf": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/@types/raf/-/raf-3.4.3.tgz",
      "integrity": "sha512-c4YAvMedbPZ5tEyxzQdMoOhhJ4RD3rngZIdwC2/qDN3d7JpEhB6fiBRKVY1lg5B7Wk+uPBjn5f39j1/2MY1oOw==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/@types/react": {
      "version": "19.1.9",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.1.9.tgz",
      "integrity": "sha512-WmdoynAX8Stew/36uTSVMcLJJ1KRh6L3IZRx1PZ7qJtBqT3dYTgyDTx8H1qoRghErydW7xw9mSJ3wS//tCRpFA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.1.7",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.1.7.tgz",
      "integrity": "sha512-i5ZzwYpqjmrKenzkoLM2Ibzt6mAsM7pxB6BCIouEVVmgiqaMj1TjaK7hnA36hbW5aZv20kx7Lw6hWzPWg0Rurw==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.0.0"
      }
    },
    "node_modules/@types/trusted-types": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/@types/trusted-types/-/trusted-types-2.0.7.tgz",
      "integrity": "sha512-ScaPdn1dQczgbl0QFTeTOmVHFULt394XJgOQNoyVhZ6r2vLnMLJfBPd53SB52T/3G36VI1/g2MZaX0cwDuXsfw==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/abs-svg-path": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/abs-svg-path/-/abs-svg-path-0.1.1.tgz",
      "integrity": "sha512-d8XPSGjfyzlXC3Xx891DJRyZfqk5JU0BJrDQcsWomFIV1/BIzPW5HDH5iDdWpqWaav0YVIEzT1RHTwWr0FFshA==",
      "license": "MIT"
    },
    "node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/ansi-styles": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "license": "MIT"
    },
    "node_modules/atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "license": "(MIT OR Apache-2.0)",
      "bin": {
        "atob": "bin/atob.js"
      },
      "engines": {
        "node": ">= 4.5.0"
      }
    },
    "node_modules/autoprefixer": {
      "version": "10.4.16",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.16.tgz",
      "integrity": "sha512-7vd3UC6xKp0HLfua5IjZlcXvGAGy7cBAXTg2lyQ/8WpNhd6SiZ8Be+xm3FyBSYJx5GKcpRCzBh7RH4/0dnY+uQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.21.10",
        "caniuse-lite": "^1.0.30001538",
        "fraction.js": "^4.3.6",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.0.0",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "license": "MIT"
    },
    "node_modules/base64-arraybuffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/base64-arraybuffer/-/base64-arraybuffer-1.0.2.tgz",
      "integrity": "sha512-I3yl4r9QB5ZRY3XuJVEPfc2XhZO6YweFPI+UovAzn+8/hb3oJ6lnysaFcjVpkCPfVWFUDvoZ8kmVDP7WyRtYtQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/bidi-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/bidi-js/-/bidi-js-1.0.3.tgz",
      "integrity": "sha512-RKshQI1R3YQ+n9YJz2QQ147P66ELpa1FQEg20Dk8oW9t2KgLbpDLLp9aGZ7y8WHSshDknG0bknqGw5/tyCs5tw==",
      "license": "MIT",
      "dependencies": {
        "require-from-string": "^2.0.2"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/brotli": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/brotli/-/brotli-1.3.3.tgz",
      "integrity": "sha512-oTKjJdShmDuGW94SyyaoQvAjf30dZaHnjJ8uAF+u2/vGJkJbJPJAT1gDiOJP5v1Zb6f9KEyW/1HpuaWIXtGHPg==",
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.1.2"
      }
    },
    "node_modules/browserify-zlib": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
      "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
      "license": "MIT",
      "dependencies": {
        "pako": "~1.0.5"
      }
    },
    "node_modules/browserslist": {
      "version": "4.25.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.25.1.tgz",
      "integrity": "sha512-KGj0KoOMXLpSNkkEI6Z6mShmQy0bc1I+T7K9N81k4WWMrfz+6fQ6es80B/YLAeRoKvjYE1YSHHOW1qe9xIVzHw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "caniuse-lite": "^1.0.30001726",
        "electron-to-chromium": "^1.5.173",
        "node-releases": "^2.0.19",
        "update-browserslist-db": "^1.1.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/btoa": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/btoa/-/btoa-1.2.1.tgz",
      "integrity": "sha512-SB4/MIGlsiVkMcHmT+pSmIPoNDoHg+7cMzmt3Uxt628MTz2487DKSqK/fuhFBrkuqrYv5UCEnACpF4dTFNKc/g==",
      "license": "(MIT OR Apache-2.0)",
      "bin": {
        "btoa": "bin/btoa.js"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001731",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001731.tgz",
      "integrity": "sha512-lDdp2/wrOmTRWuoB5DpfNkC0rJDU8DqRa6nYL6HK6sytw70QMopt/NIc/9SM7ylItlBWfACXk0tEn37UWM/+mg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/canvg": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/canvg/-/canvg-3.0.11.tgz",
      "integrity": "sha512-5ON+q7jCTgMp9cjpu4Jo6XbvfYwSB2Ow3kzHKfIyJfaCAOHLbdKPQqGKgfED/R5B+3TFFfe8pegYA+b423SRyA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@babel/runtime": "^7.12.5",
        "@types/raf": "^3.4.0",
        "core-js": "^3.8.3",
        "raf": "^3.4.1",
        "regenerator-runtime": "^0.13.7",
        "rgbcolor": "^1.0.1",
        "stackblur-canvas": "^2.0.0",
        "svg-pathdata": "^6.0.3"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/clone": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/clone/-/clone-2.1.2.tgz",
      "integrity": "sha512-3Pe/CF1Nn94hyhIYpjtiLhdCoEoz0DqQ+988E9gmeEdQZlojxnOb74wctFyuwWQHzqyf9X7C7MG8juUpqBJT8w==",
      "license": "MIT",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "license": "MIT",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/core-js": {
      "version": "3.44.0",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.44.0.tgz",
      "integrity": "sha512-aFCtd4l6GvAXwVEh3XbbVqJGHDJt0OZRa+5ePGx3LLwi12WfexqQxcsohb2wgsa/92xtl19Hd66G/L+TaAxDMw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/crypto-js": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/crypto-js/-/crypto-js-4.2.0.tgz",
      "integrity": "sha512-KALDyEYgpY+Rlob/iriUtjV6d5Eq+Y191A5g4UqLAi8CyGP9N1+FdVbkc1SxKc2r4YAYqG8JzO2KGL+AizD70Q==",
      "license": "MIT"
    },
    "node_modules/css-line-break": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/css-line-break/-/css-line-break-2.1.0.tgz",
      "integrity": "sha512-FHcKFCZcAha3LwfVBhCQbW2nCNbkZXn7KVUJcsT5/P8YmfsVja0FMPJr0B903j/E69HUphKiV9iQArX8SDYA4w==",
      "license": "MIT",
      "dependencies": {
        "utrie": "^1.0.2"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz",
      "integrity": "sha512-3UDv+G9CsCKO1WKMGw9fwq/SWJYbI0c5Y7LU1AXYoDdbhE2AHQ6N6Nb34sG8Fj7T5APy8qXDCKuuIHd1BR0tVA==",
      "license": "Apache-2.0",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dfa": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/dfa/-/dfa-1.2.0.tgz",
      "integrity": "sha512-ED3jP8saaweFTjeGX8HQPjeC1YYyZs98jGNZx6IiBvxW7JG5v492kamAQB3m2wop07CvU/RQmzcKr6bgcC5D/Q==",
      "license": "MIT"
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "license": "MIT"
    },
    "node_modules/dompurify": {
      "version": "3.2.6",
      "resolved": "https://registry.npmjs.org/dompurify/-/dompurify-3.2.6.tgz",
      "integrity": "sha512-/2GogDQlohXPZe6D6NOgQvXLPSYBqIWMnZ8zzOhn09REE4eyAzb+Hed3jhoM9OkuaJ8P6ZGTTVWQKAi8ieIzfQ==",
      "license": "(MPL-2.0 OR Apache-2.0)",
      "optional": true,
      "optionalDependencies": {
        "@types/trusted-types": "^2.0.7"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.192",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.192.tgz",
      "integrity": "sha512-rP8Ez0w7UNw/9j5eSXCe10o1g/8B1P5SM90PCCMVkIRQn2R0LEHWz4Eh9RnxkniuDe1W0cTSOB3MLlkTGDcuCg==",
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "license": "MIT"
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/events": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
      "integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.8.x"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fflate": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/fflate/-/fflate-0.8.2.tgz",
      "integrity": "sha512-cPJU47OaAoCbg0pBvzsgpTPhmhqI5eJjh/JIu8tPj5q+T7iLvW/JAYUqmE7KOB4R1ZyEhzBaIQpQpardBF5z8A==",
      "license": "MIT"
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fontkit": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/fontkit/-/fontkit-2.0.4.tgz",
      "integrity": "sha512-syetQadaUEDNdxdugga9CpEYVaQIxOwk7GlwZWWZ19//qW4zE5bknOKeMBDYAASwnpaSHKJITRLMF9m1fp3s6g==",
      "license": "MIT",
      "dependencies": {
        "@swc/helpers": "^0.5.12",
        "brotli": "^1.3.2",
        "clone": "^2.1.2",
        "dfa": "^1.2.0",
        "fast-deep-equal": "^3.1.3",
        "restructure": "^3.0.0",
        "tiny-inflate": "^1.0.3",
        "unicode-properties": "^1.4.0",
        "unicode-trie": "^2.0.0"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz",
      "integrity": "sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==",
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.6",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fraction.js": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "patreon",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/glob": {
      "version": "10.4.5",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^3.1.2",
        "minimatch": "^9.0.4",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^1.11.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hsl-to-hex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/hsl-to-hex/-/hsl-to-hex-1.0.0.tgz",
      "integrity": "sha512-K6GVpucS5wFf44X0h2bLVRDsycgJmf9FF2elg+CrqD8GcFU8c6vYhgXn8NjUkFCwj+xDFb70qgLbTUm6sxwPmA==",
      "license": "MIT",
      "dependencies": {
        "hsl-to-rgb-for-reals": "^1.1.0"
      }
    },
    "node_modules/hsl-to-rgb-for-reals": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/hsl-to-rgb-for-reals/-/hsl-to-rgb-for-reals-1.1.1.tgz",
      "integrity": "sha512-LgOWAkrN0rFaQpfdWBQlv/VhkOxb5AsBjk6NQVx4yEzWS923T07X0M1Y0VNko2H52HeSpZrZNNMJ0aFqsdVzQg==",
      "license": "ISC"
    },
    "node_modules/html2canvas": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/html2canvas/-/html2canvas-1.4.1.tgz",
      "integrity": "sha512-fPU6BHNpsyIhr8yyMpTLLxAbkaK8ArIBcmZIRiBLiDhjeqvXolaEmDGmELFuX9I4xDcaKKcJl+TKZLqruBbmWA==",
      "license": "MIT",
      "dependencies": {
        "css-line-break": "^2.1.0",
        "text-segmentation": "^1.0.3"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/hyphen": {
      "version": "1.10.6",
      "resolved": "https://registry.npmjs.org/hyphen/-/hyphen-1.10.6.tgz",
      "integrity": "sha512-fXHXcGFTXOvZTSkPJuGOQf5Lv5T/R2itiiCVPg9LxAje5D00O0pP83yJShFq5V89Ly//Gt6acj7z8pbBr34stw==",
      "license": "ISC"
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
      "license": "MIT"
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-url": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz",
      "integrity": "sha512-ITvGim8FhRiYe4IQ5uHSkj7pVaPDrCTkNd3yq3cV7iZAcJdHTUMPMEHcqSOy9xZ9qFenQCvi+2wjH9a1nXqHww==",
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "license": "ISC"
    },
    "node_modules/jackspeak": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jay-peg": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/jay-peg/-/jay-peg-1.1.1.tgz",
      "integrity": "sha512-D62KEuBxz/ip2gQKOEhk/mx14o7eiFRaU+VNNSP4MOiIkwb/D6B3G1Mfas7C/Fit8EsSV2/IWjZElx/Gs6A4ww==",
      "license": "MIT",
      "dependencies": {
        "restructure": "^3.0.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/jspdf": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/jspdf/-/jspdf-3.0.1.tgz",
      "integrity": "sha512-qaGIxqxetdoNnFQQXxTKUD9/Z7AloLaw94fFsOiJMxbfYdBbrBuhWmbzI8TVjrw7s3jBY1PFHofBKMV/wZPapg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.26.7",
        "atob": "^2.1.2",
        "btoa": "^1.2.1",
        "fflate": "^0.8.1"
      },
      "optionalDependencies": {
        "canvg": "^3.0.11",
        "core-js": "^3.6.0",
        "dompurify": "^3.2.4",
        "html2canvas": "^1.0.0-rc.5"
      }
    },
    "node_modules/lilconfig": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
      "integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/linebreak": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/linebreak/-/linebreak-1.1.0.tgz",
      "integrity": "sha512-MHp03UImeVhB7XZtjd0E4n6+3xr5Dq/9xI/5FptGk5FrbDR3zagPa2DS6U8ks/3HjbKWG9Q1M2ufOzxV2qLYSQ==",
      "license": "MIT",
      "dependencies": {
        "base64-js": "0.0.8",
        "unicode-trie": "^2.0.0"
      }
    },
    "node_modules/linebreak/node_modules/base64-js": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-0.0.8.tgz",
      "integrity": "sha512-3XSA2cR/h/73EzlXXdU6YNycmYI7+kicTxks4eJg2g39biHR84slg2+des+p7iHYhbRg/udIS4TD53WabcOUkw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "license": "ISC"
    },
    "node_modules/lucide-react": {
      "version": "0.534.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.534.0.tgz",
      "integrity": "sha512-4Bz7rujQ/mXHqCwjx09ih/Q9SCizz9CjBV5repw9YSHZZZaop9/Oj0RgCDt6WdEaeAPfbcZ8l2b4jzApStqgNw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/media-engine": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/media-engine/-/media-engine-1.0.3.tgz",
      "integrity": "sha512-aa5tG6sDoK+k70B9iEX1NeyfT8ObCKhNDs6lJVpwF6r8vhUfuKMslIcirq6HIUYuuUYLefcEQOn9bSBOvawtwg==",
      "license": "MIT"
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/next": {
      "version": "15.4.5",
      "resolved": "https://registry.npmjs.org/next/-/next-15.4.5.tgz",
      "integrity": "sha512-nJ4v+IO9CPmbmcvsPebIoX3Q+S7f6Fu08/dEWu0Ttfa+wVwQRh9epcmsyCPjmL2b8MxC+CkBR97jgDhUUztI3g==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "15.4.5",
        "@swc/helpers": "0.5.15",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": "^18.18.0 || ^19.8.0 || >= 20.0.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "15.4.5",
        "@next/swc-darwin-x64": "15.4.5",
        "@next/swc-linux-arm64-gnu": "15.4.5",
        "@next/swc-linux-arm64-musl": "15.4.5",
        "@next/swc-linux-x64-gnu": "15.4.5",
        "@next/swc-linux-x64-musl": "15.4.5",
        "@next/swc-win32-arm64-msvc": "15.4.5",
        "@next/swc-win32-x64-msvc": "15.4.5",
        "sharp": "^0.34.3"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.19",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz",
      "integrity": "sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==",
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-svg-path": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/normalize-svg-path/-/normalize-svg-path-1.1.0.tgz",
      "integrity": "sha512-r9KHKG2UUeB5LoTouwDzBy2VxXlHsiM6fyLQvnJa0S5hrhzqElH/CH7TUGhT1fVvIYBIKf3OpY4YJ4CK+iaqHg==",
      "license": "MIT",
      "dependencies": {
        "svg-arc-to-cubic-bezier": "^3.0.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
      "license": "BlueOak-1.0.0"
    },
    "node_modules/pako": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
      "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
      "license": "(MIT AND Zlib)"
    },
    "node_modules/parse-svg-path": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/parse-svg-path/-/parse-svg-path-0.1.2.tgz",
      "integrity": "sha512-JyPSBnkTJ0AI8GGJLfMXvKq42cj5c006fnLz6fXy6zfoVjJizi8BNTpu8on8ziI1cKy9d9DGNuY17Ce7wuejpQ==",
      "license": "MIT"
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha512-7EAHlyLHI56VEIdK57uwHdHKIaAGbnXPiw0yWbarQZOKaKpvUIgW0jWRVLiatnM+XXlSwsanIBH/hzGMJulMow==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
      "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "license": "MIT"
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/queue": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/queue/-/queue-6.0.2.tgz",
      "integrity": "sha512-iHZWu+q3IdFZFX36ro/lKBkSvfkztY5Y7HMiPlOUjhupPcG2JMfst2KKEpu5XndviX/3UhFbRngUPNKtgvtZiA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "~2.0.3"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/raf": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/raf/-/raf-3.4.1.tgz",
      "integrity": "sha512-Sq4CW4QhwOHE8ucn6J34MqtZCeWFP2aQSmrlroYgqAV1PjStIhJXxYuTgUIfkEk7zTLjmIjLmU5q+fbD1NnOJA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "performance-now": "^2.1.0"
      }
    },
    "node_modules/react": {
      "version": "19.1.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.1.0.tgz",
      "integrity": "sha512-FS+XFBNvn3GTAWq26joslQgWNoFu08F4kl0J4CgdNKADkdSGXQyTCnKteIAJy96Br6YbpEU1LSzV5dYtjMkMDg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.1.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.1.0.tgz",
      "integrity": "sha512-Xs1hdnE+DyKgeHJeJznQmYMIBG3TKIHJJT95Q58nHLSrElKlGQqDTR2HQ9fx5CN/Gk6Vh/kupBTDLU11/nDk/g==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.26.0"
      },
      "peerDependencies": {
        "react": "^19.1.0"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.61.1",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.61.1.tgz",
      "integrity": "sha512-2vbXUFDYgqEgM2RcXcAT2PwDW/80QARi+PKmHy5q2KhuKvOlG8iIYgf7eIlIANR5trW9fJbP4r5aub3a4egsew==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.13.11",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.11.tgz",
      "integrity": "sha512-kY1AZVr2Ra+t+piVaJ4gxaFaReZVH40AKNo7UCX6W+dEwBo/2oZJzqfuN1qLq1oL45o56cPaTXELwrTh8Fpggg==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.10",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.10.tgz",
      "integrity": "sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==",
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/restructure": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/restructure/-/restructure-3.0.2.tgz",
      "integrity": "sha512-gSfoiOEA0VPE6Tukkrr7I0RBdE0s7H1eFCDBk05l1KIQT1UIKNc5JZy6jdyW6eYH3aR3g5b3PuL77rq0hvwtAw==",
      "license": "MIT"
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rgbcolor": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/rgbcolor/-/rgbcolor-1.0.1.tgz",
      "integrity": "sha512-9aZLIrhRaD97sgVhtJOW6ckOEh6/GnvQtdVNfdZ6s67+3/XwLS9lBcQYzEEhYVeUowN7pRzMLsyGhK2i/xvWbw==",
      "license": "MIT OR SEE LICENSE IN FEEL-FREE.md",
      "optional": true,
      "engines": {
        "node": ">= 0.8.15"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.26.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.26.0.tgz",
      "integrity": "sha512-NlHwttCI/l5gCPR3D1nNXtWABUmBwvZpEQiD4IXSbIDq8BzLIK/7Ir5gTFSGZDUu37K5cMNp0hFtzO38sC7gWA==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.3.tgz",
      "integrity": "sha512-eX2IQ6nFohW4DbvHIOLRB3MHFpYqaqvXd3Tp5e/T/dSH83fxaNJQRvDMhASmkNTsNTVF2/OOopzRCt7xokgPfg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "color": "^4.2.3",
        "detect-libc": "^2.0.4",
        "semver": "^7.7.2"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.3",
        "@img/sharp-darwin-x64": "0.34.3",
        "@img/sharp-libvips-darwin-arm64": "1.2.0",
        "@img/sharp-libvips-darwin-x64": "1.2.0",
        "@img/sharp-libvips-linux-arm": "1.2.0",
        "@img/sharp-libvips-linux-arm64": "1.2.0",
        "@img/sharp-libvips-linux-ppc64": "1.2.0",
        "@img/sharp-libvips-linux-s390x": "1.2.0",
        "@img/sharp-libvips-linux-x64": "1.2.0",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.0",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.0",
        "@img/sharp-linux-arm": "0.34.3",
        "@img/sharp-linux-arm64": "0.34.3",
        "@img/sharp-linux-ppc64": "0.34.3",
        "@img/sharp-linux-s390x": "0.34.3",
        "@img/sharp-linux-x64": "0.34.3",
        "@img/sharp-linuxmusl-arm64": "0.34.3",
        "@img/sharp-linuxmusl-x64": "0.34.3",
        "@img/sharp-wasm32": "0.34.3",
        "@img/sharp-win32-arm64": "0.34.3",
        "@img/sharp-win32-ia32": "0.34.3",
        "@img/sharp-win32-x64": "0.34.3"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==",
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stackblur-canvas": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/stackblur-canvas/-/stackblur-canvas-2.7.0.tgz",
      "integrity": "sha512-yf7OENo23AGJhBriGx0QivY5JP6Y1HbrrDI6WLt6C5auYZXlQrheoY8hD4ibekFKz1HOfE48Ww8kMWMnJD/zcQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=0.1.14"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/string-width-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.0",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "glob": "^10.3.10",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/svg-arc-to-cubic-bezier": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/svg-arc-to-cubic-bezier/-/svg-arc-to-cubic-bezier-3.2.0.tgz",
      "integrity": "sha512-djbJ/vZKZO+gPoSDThGNpKDO+o+bAeA4XQKovvkNCqnIS2t+S4qnLAGQhyyrulhCFRl1WWzAp0wUDV8PpTVU3g==",
      "license": "ISC"
    },
    "node_modules/svg-pathdata": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/svg-pathdata/-/svg-pathdata-6.0.3.tgz",
      "integrity": "sha512-qsjeeq5YjBZ5eMdFuUa4ZosMLxgr5RZ+F+Y1OrDhuOCEInRMA3x74XdBtggJcj9kOeInz0WE+LgCPDkZFlBYJw==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.5",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.5.tgz",
      "integrity": "sha512-DlTxttYcogpDfx3tf/8jfnma1nfAYi2cBUYV2YNoPPecwmO3YGiFlOX9D8tGAu+EDF38ryBzvrDKU/BLMsUwbw==",
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.5.3",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.0",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.0",
        "lilconfig": "^2.1.0",
        "micromatch": "^4.0.5",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.0.0",
        "postcss": "^8.4.23",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.1",
        "postcss-nested": "^6.0.1",
        "postcss-selector-parser": "^6.0.11",
        "resolve": "^1.22.2",
        "sucrase": "^3.32.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss/node_modules/postcss-load-config": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
      "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.0.0",
        "yaml": "^2.3.4"
      },
      "engines": {
        "node": ">= 14"
      },
      "peerDependencies": {
        "postcss": ">=8.0.9",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "postcss": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/tailwindcss/node_modules/postcss-load-config/node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/text-segmentation": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/text-segmentation/-/text-segmentation-1.0.3.tgz",
      "integrity": "sha512-iOiPUo/BGnZ6+54OsWxZidGCsdU8YbE4PSpdPinp7DeMtUJNJBoJ/ouUSTJjHkh1KntHaltHl/gDs2FC4i5+Nw==",
      "license": "MIT",
      "dependencies": {
        "utrie": "^1.0.2"
      }
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tiny-inflate": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/tiny-inflate/-/tiny-inflate-1.0.3.tgz",
      "integrity": "sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==",
      "license": "MIT"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "license": "Apache-2.0"
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/typescript": {
      "version": "5.8.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.8.3.tgz",
      "integrity": "sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unicode-properties": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/unicode-properties/-/unicode-properties-1.4.1.tgz",
      "integrity": "sha512-CLjCCLQ6UuMxWnbIylkisbRj31qxHPAurvena/0iwSVbQ2G1VY5/HjV0IRabOEbDHlzZlRdCrD4NhB0JtU40Pg==",
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.0",
        "unicode-trie": "^2.0.0"
      }
    },
    "node_modules/unicode-trie": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-trie/-/unicode-trie-2.0.0.tgz",
      "integrity": "sha512-x7bc76x0bm4prf1VLg79uhAzKw8DVboClSN5VxJuQ+LKDOVEW9CdH+VY7SP+vX7xCYQqzzgQpFqz15zeLvAtZQ==",
      "license": "MIT",
      "dependencies": {
        "pako": "^0.2.5",
        "tiny-inflate": "^1.0.0"
      }
    },
    "node_modules/unicode-trie/node_modules/pako": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/pako/-/pako-0.2.9.tgz",
      "integrity": "sha512-NUcwaKxUxWrZLpDG+z/xZaCgQITkA/Dv4V/T6bw7VON6l1Xz/VnrBqrYjZQ12TamKHzITTfOEIYUj48y2KXImA==",
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
      "integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/utrie": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/utrie/-/utrie-1.0.2.tgz",
      "integrity": "sha512-1MLa5ouZiOmQzUbjbu9VmjLzn1QLXBhwpUa7kdLUQK+KQ5KA9I1vk5U4YHe/X2Ch7PYnJfWuWT+VbuxbGwljhw==",
      "license": "MIT",
      "dependencies": {
        "base64-arraybuffer": "^1.0.2"
      }
    },
    "node_modules/vite-compatible-readable-stream": {
      "version": "3.6.1",
      "resolved": "https://registry.npmjs.org/vite-compatible-readable-stream/-/vite-compatible-readable-stream-3.6.1.tgz",
      "integrity": "sha512-t20zYkrSf868+j/p31cRIGN28Phrjm3nRSLR2fyc2tiWi4cZGVdv68yNlwnIINTkMTmPoMiSlc0OadaO7DXZaQ==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yaml": {
      "version": "2.8.0",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.8.0.tgz",
      "integrity": "sha512-4lLa/EcQCB0cJkyts+FpIRx5G/llPxfP6VQU5KByHEhLxY3IJCH0f0Hy1MHI8sClTvsIb8qwRJ6R/ZdlDJ/leQ==",
      "license": "ISC",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14.6"
      }
    },
    "node_modules/yoga-layout": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/yoga-layout/-/yoga-layout-3.2.1.tgz",
      "integrity": "sha512-0LPOt3AxKqMdFBZA3HBAt/t/8vIKq7VaQYbuA8WxCgung+p9TVyKRYdpvCb80HcdTN2NkbIKbhNwKUfm3tQywQ==",
      "license": "MIT"
    },
    "node_modules/zod": {
      "version": "4.0.13",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.0.13.tgz",
      "integrity": "sha512-jv+zRxuZQxTrFHzxZ46ezL2FtnE+M4HIJHJEwLsZ7UjrXHltdG6HrxvqM0twoVCWxJiYf8WqKjAcjztegpkB+Q==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

```n

## File: next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

```n

## File: next.config.js

```javascript
/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export" // enables static HTML export mode in Next 15+
};

export default nextConfig;

```n

## File: tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```n

## File: tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

export default <Config>{
  /* scan *every* source file that can contain Tailwind classes */
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/lib/**/*.{ts,tsx,js,jsx}',
  ],

  theme: {
    extend: {
      /* (optional) put any custom colours / fonts back here */
    },
  },

  plugins: [],            // add typography/forms later if you like
} 
```n

## File: postcss.config.mjs

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```n

## File: README.md

```markdown
# Resume Maker - Modern Resume Generator

A **Next.js-based resume generator** that creates professional PDF resumes with a beautiful, modern web interface. Built with TypeScript, React 19, and Tailwind CSS.

![Resume Maker](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **📝 Real-time Resume Builder** - Live preview as you type
- **🎨 Modern Template** - Clean, professional design
- **🌙 Dark/Light Mode** - Toggle between themes
- **📄 PDF Export** - Generate professional PDF resumes (HTML-to-PDF)
- **💾 JSON Export** - Save and share resume data
- **📱 Responsive Design** - Works on desktop, tablet, and mobile
- **💾 Local Storage** - Auto-save your progress
- **⚡ Fast & Modern** - Built with Next.js 15 and React 19
- **🔄 Scala Data Import** - Import data from original Scala format

## 🚀 Live Demo

Visit: [resumemaker.42-it.com](https://resumemaker.42-it.com)

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.4.5, React 19.1.0, TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React
- **PDF Generation**: jsPDF with HTML-to-PDF rendering
- **Deployment**: Cloudflare Pages
- **Version Control**: Git & GitHub

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/jimmcguffinus/resumaker-next.git
cd resumaker-next

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🏗️ Project Structure

```
resumaker-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       └── ResumeGenerator.tsx  # Main resume component
├── lib/
│   └── pdf/
│       └── exportResume.ts     # PDF export functionality
├── public/                     # Static assets
├── scala_resumemaker/          # Original Scala project
├── package.json                # Dependencies
├── next.config.ts             # Next.js config
└── README.md                  # This file
```

## 🎯 Usage

1. **Fill in your information** - Add personal details, experience, education
2. **Real-time preview** - See changes instantly as you type
3. **Export options**:
   - **PDF**: Download as professional PDF (matches UI exactly)
   - **JSON**: Save data for later editing
4. **Load sample data** - Try the demo with pre-filled content
5. **Import Scala data** - Import from original Scala format

## 📋 Resume Data Model

The app uses a structured data model for resumes:

```typescript
interface Resume {
  header: {
    name: string;
    tagline: string;
    contact: {
      phone: string;
      email: string;
    };
    location: {
      city: string;
      state: string;
    };
  };
  experience: Array<{
    name: string;
    link: string;
    blurb: string;
    tenure: string;
    jobs: Array<{
      title: string;
      description: string;
      skills: string[];
      languages: string[];
    }>;
  }>;
  education: Array<{
    institution: string;
    link: string;
    year: string;
    degree: string;
  }>;
  skills: string[];
  extras: string[];
}
```

## 🔄 Migration from Scala

This project was converted from a Scala-based resume generator that used LaTeX for PDF generation. The migration involved:

- **Frontend**: Scala → Next.js/React
- **PDF Generation**: LaTeX → jsPDF (HTML-to-PDF)
- **Deployment**: Local build → Cloudflare Pages
- **UI**: Command-line → Modern web interface
- **Data Import**: Scala format → JSON with conversion utilities

### Key Improvements

- **Real-time preview** instead of command-line editing
- **Modern web UI** with responsive design
- **Client-side PDF generation** using jsPDF
- **Auto-save functionality** with local storage
- **Scala data compatibility** for easy migration

## 🚀 Deployment

### Cloudflare Pages

The app is deployed on Cloudflare Pages with automatic builds from GitHub:

1. **Connected to GitHub**: Automatic deployments on push
2. **Build settings**: Next.js framework preset with static export
3. **Custom domain**: resumemaker.42-it.com

### Local Development

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
```

## 🔧 PDF Export

The PDF export uses jsPDF's HTML-to-PDF functionality to capture the exact UI appearance:

- **HTML-to-PDF**: Renders the live preview directly to PDF
- **Color compatibility**: Handles Tailwind CSS 4.0 color formats
- **Responsive layout**: Maintains design across different screen sizes
- **Auto-pagination**: Automatically splits content across pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jim McGuffin** - [GitHub](https://github.com/jimmcguffinus)

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Cloudflare** for the excellent hosting platform
- **Original Scala version** that inspired this conversion
- **jsPDF** for client-side PDF generation capabilities

```n

## File: PRD.md

```markdown
# Product Requirements Document (PRD)
# Resume Maker - Modern Resume Generator

## 📋 Executive Summary

**Product Name:** Resume Maker  
**Version:** 1.0.0  
**Target URL:** resumemaker.42-it.com  
**Last Updated:** January 2025  

Resume Maker is a modern, web-based resume generator that allows users to create professional PDF resumes through an intuitive, real-time interface. The application provides multiple templates, instant preview, and seamless export capabilities.

## 🎯 Product Vision

To provide job seekers with a modern, accessible, and user-friendly tool for creating professional resumes that stand out in today's competitive job market.

## 🎯 Success Metrics

- **User Engagement:** 60% completion rate for resume creation
- **Export Rate:** 40% of users export PDF resumes
- **Return Rate:** 25% of users return within 30 days
- **Performance:** < 2 second load time
- **Accessibility:** WCAG 2.1 AA compliance

## 👥 Target Users

### Primary Users
- **Job Seekers** (18-45 years old)
- **Career Changers** looking to update their resume
- **Recent Graduates** entering the workforce
- **Professionals** updating their resume for new opportunities

### Secondary Users
- **HR Professionals** reviewing resume formats
- **Career Counselors** recommending tools to clients
- **Recruiters** understanding modern resume formats

## 🚀 Core Features

### 1. Resume Builder Interface
**Priority:** P0 (Critical)  
**Description:** Real-time form interface for entering resume information

**Requirements:**
- Personal information section (name, title, contact, location)
- Experience section with job details
- Education section with degree information
- Skills section with comma-separated input
- Additional information section for extras

**Acceptance Criteria:**
- All form fields save to local storage
- Real-time validation of required fields
- Responsive design for mobile and desktop

### 2. Live Preview
**Priority:** P0 (Critical)  
**Description:** Real-time preview of resume as user types

**Requirements:**
- Instant preview updates
- Multiple template views (Modern, Classic, Minimal)
- Responsive preview that matches final PDF output

**Acceptance Criteria:**
- Preview updates within 500ms of input
- All template styles render correctly
- Preview matches PDF output exactly

### 3. PDF Export
**Priority:** P0 (Critical)  
**Description:** Generate and download professional PDF resumes

**Requirements:**
- Client-side PDF generation using jsPDF
- Professional formatting and layout
- Proper page breaks for long resumes
- Consistent styling across all templates

**Acceptance Criteria:**
- PDF generation completes within 5 seconds
- PDF opens correctly in all major PDF readers
- Layout matches preview exactly

### 4. Template System
**Priority:** P1 (High)  
**Description:** Multiple resume templates with different styles

**Requirements:**
- Modern template (blue accents, clean design)
- Classic template (traditional layout)
- Minimal template (simple, clean design)
- Easy template switching

**Acceptance Criteria:**
- All templates render correctly
- Template switching is instant
- Each template has distinct visual identity

### 5. Dark/Light Mode
**Priority:** P1 (High)  
**Description:** Theme toggle for better user experience

**Requirements:**
- Toggle between dark and light themes
- Theme preference saved in local storage
- Consistent styling across all components

**Acceptance Criteria:**
- Theme switch is instant
- Preference persists across sessions
- All UI elements adapt to theme

### 6. Data Export/Import
**Priority:** P2 (Medium)  
**Description:** Save and load resume data

**Requirements:**
- JSON export of resume data
- Local storage for auto-save
- Sample data loading for testing

**Acceptance Criteria:**
- JSON export contains all resume data
- Local storage works across browser sessions
- Sample data demonstrates all features

## 🛠️ Technical Requirements

### Frontend
- **Framework:** Next.js 15.4.5
- **Language:** TypeScript 5.0
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS 4.0
- **Icons:** Lucide React
- **PDF Generation:** jsPDF

### Performance
- **Load Time:** < 2 seconds initial load
- **Preview Updates:** < 500ms response time
- **PDF Generation:** < 5 seconds
- **Bundle Size:** < 500KB gzipped

### Browser Support
- **Chrome:** 90+
- **Firefox:** 88+
- **Safari:** 14+
- **Edge:** 90+

### Accessibility
- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** mode support

## 📱 User Experience Requirements

### User Flow
1. **Landing Page** → Clear value proposition
2. **Form Interface** → Intuitive data entry
3. **Live Preview** → Real-time feedback
4. **Template Selection** → Easy customization
5. **Export Options** → Multiple output formats

### Design Principles
- **Simplicity:** Clean, uncluttered interface
- **Efficiency:** Minimal clicks to complete tasks
- **Feedback:** Clear indication of actions and states
- **Accessibility:** Usable by people with disabilities

## 🔒 Security & Privacy

### Data Handling
- **Client-side only:** No server-side data storage
- **Local storage:** Resume data stored in browser
- **No tracking:** No analytics or user tracking
- **GDPR compliant:** No personal data collection

### Export Security
- **PDF generation:** Client-side only
- **No data transmission:** All processing local
- **Secure downloads:** Standard browser download mechanism

## 🚀 Deployment & Infrastructure

### Hosting
- **Platform:** Cloudflare Pages
- **Domain:** resumemaker.42-it.com
- **SSL:** Automatic HTTPS
- **CDN:** Global content delivery

### CI/CD
- **Source:** GitHub repository
- **Auto-deploy:** Push to main branch
- **Build process:** npm run build
- **Deployment time:** < 3 minutes

## 📊 Analytics & Monitoring

### Performance Monitoring
- **Core Web Vitals** tracking
- **Error monitoring** for JavaScript errors
- **Uptime monitoring** for availability

### User Analytics (Optional)
- **Page views** and session duration
- **Feature usage** (export rates, template usage)
- **Error tracking** for user experience issues

## 🎯 Future Enhancements (v2.0)

### Planned Features
- **Resume Templates:** Additional professional templates
- **Cover Letter Generator:** Integrated cover letter creation
- **Resume Scoring:** AI-powered resume optimization
- **Collaboration:** Share resumes with others for feedback
- **Mobile App:** Native mobile application

### Technical Improvements
- **PWA Support:** Progressive web app capabilities
- **Offline Mode:** Work without internet connection
- **Advanced PDF:** More sophisticated PDF generation
- **API Integration:** Connect with job boards

## 📋 Acceptance Criteria

### MVP (v1.0) Complete When:
- ✅ User can create a complete resume
- ✅ Live preview works for all sections
- ✅ PDF export generates professional output
- ✅ All three templates render correctly
- ✅ Dark/light mode toggle works
- ✅ Local storage saves user progress
- ✅ Application is deployed and accessible
- ✅ Performance meets all requirements
- ✅ Accessibility standards are met

### Success Definition
- **Functional:** All core features work as specified
- **Usable:** Users can complete resume creation in < 10 minutes
- **Reliable:** 99.9% uptime with no critical bugs
- **Fast:** All interactions respond within 500ms
- **Accessible:** WCAG 2.1 AA compliance achieved

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Next Review:** February 2025 
```n

## File: MVP.md

```markdown
# Minimum Viable Product (MVP)
# Resume Maker - Modern Resume Generator

## 🎯 MVP Definition

**MVP Goal:** Create a functional, web-based resume generator that allows users to create and export professional PDF resumes with a modern, intuitive interface.

**MVP Scope:** Core resume creation functionality with basic templates and export capabilities.

## ✅ MVP Features (Must Have)

### 1. Resume Builder Form
**Status:** ✅ Complete  
**Priority:** P0 (Critical)

**Core Functionality:**
- Personal information input (name, title, contact, location)
- Experience section with job details
- Education section with degree information
- Skills section with comma-separated input
- Additional information section

**Acceptance Criteria:**
- ✅ All form fields functional
- ✅ Real-time data saving to local storage
- ✅ Responsive design for mobile/desktop
- ✅ Form validation for required fields

### 2. Live Preview
**Status:** ✅ Complete  
**Priority:** P0 (Critical)

**Core Functionality:**
- Real-time preview as user types
- Multiple template views (Modern, Classic, Minimal)
- Preview matches final PDF output

**Acceptance Criteria:**
- ✅ Preview updates within 500ms
- ✅ All three templates render correctly
- ✅ Preview layout matches PDF export
- ✅ Responsive preview design

### 3. PDF Export
**Status:** ✅ Complete  
**Priority:** P0 (Critical)

**Core Functionality:**
- Generate professional PDF resumes
- Client-side PDF generation using jsPDF
- Proper formatting and layout

**Acceptance Criteria:**
- ✅ PDF generation completes within 5 seconds
- ✅ PDF opens correctly in all major readers
- ✅ Layout matches preview exactly
- ✅ Professional formatting and styling

### 4. Template System
**Status:** ✅ Complete  
**Priority:** P1 (High)

**Core Functionality:**
- Modern template (blue accents, clean design)
- Classic template (traditional layout)
- Minimal template (simple, clean design)
- Easy template switching

**Acceptance Criteria:**
- ✅ All three templates functional
- ✅ Template switching is instant
- ✅ Each template has distinct visual identity
- ✅ Templates work with all content types

### 5. Dark/Light Mode
**Status:** ✅ Complete  
**Priority:** P1 (High)

**Core Functionality:**
- Toggle between dark and light themes
- Theme preference saved in local storage
- Consistent styling across all components

**Acceptance Criteria:**
- ✅ Theme switch works instantly
- ✅ Preference persists across sessions
- ✅ All UI elements adapt to theme
- ✅ No visual glitches during theme switch

### 6. Data Management
**Status:** ✅ Complete  
**Priority:** P2 (Medium)

**Core Functionality:**
- JSON export of resume data
- Local storage for auto-save
- Sample data loading for testing

**Acceptance Criteria:**
- ✅ JSON export contains all resume data
- ✅ Local storage works across browser sessions
- ✅ Sample data demonstrates all features
- ✅ Data persistence works reliably

## 🚀 MVP Technical Stack

### Frontend
- **Framework:** Next.js 15.4.5 ✅
- **Language:** TypeScript 5.0 ✅
- **UI Library:** React 19.1.0 ✅
- **Styling:** Tailwind CSS 4.0 ✅
- **Icons:** Lucide React ✅
- **PDF Generation:** jsPDF ✅

### Deployment
- **Platform:** Cloudflare Pages ✅
- **Domain:** resumemaker.42-it.com ✅
- **SSL:** Automatic HTTPS ✅
- **CDN:** Global content delivery ✅

## 📊 MVP Success Metrics

### Performance Targets
- **Load Time:** < 2 seconds ✅
- **Preview Updates:** < 500ms ✅
- **PDF Generation:** < 5 seconds ✅
- **Bundle Size:** < 500KB gzipped ✅

### User Experience Targets
- **Completion Rate:** 60% of users complete resume creation
- **Export Rate:** 40% of users export PDF resumes
- **Return Rate:** 25% of users return within 30 days
- **Error Rate:** < 1% of sessions have errors

### Accessibility Targets
- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** mode support

## 🎯 MVP User Journey

### Step 1: Landing
- User visits resumemaker.42-it.com
- Clear value proposition visible
- Call-to-action to start building resume

### Step 2: Resume Creation
- User fills out personal information
- Adds work experience and education
- Lists skills and additional information
- All data saves automatically

### Step 3: Preview & Customization
- User sees live preview of resume
- Switches between templates
- Toggles dark/light mode
- Reviews final layout

### Step 4: Export
- User exports PDF resume
- Downloads professional document
- Can also export JSON data for backup

## ✅ MVP Completion Checklist

### Core Functionality
- ✅ Resume builder form with all sections
- ✅ Real-time preview with multiple templates
- ✅ PDF export with professional formatting
- ✅ Dark/light mode toggle
- ✅ Local storage for data persistence
- ✅ JSON export/import functionality
- ✅ Responsive design for all devices

### Technical Implementation
- ✅ Next.js 15 with TypeScript
- ✅ React 19 with modern hooks
- ✅ Tailwind CSS for styling
- ✅ jsPDF for client-side PDF generation
- ✅ Lucide React for icons
- ✅ Local storage for data persistence

### Deployment & Infrastructure
- ✅ GitHub repository setup
- ✅ Cloudflare Pages deployment
- ✅ Custom domain configuration
- ✅ SSL certificate enabled
- ✅ Auto-deployment from main branch

### Quality Assurance
- ✅ Cross-browser compatibility
- ✅ Mobile responsiveness
- ✅ Performance optimization
- ✅ Error handling
- ✅ Accessibility features

## 🚀 MVP Launch Readiness

### Pre-Launch Checklist
- ✅ All core features functional
- ✅ Performance targets met
- ✅ Cross-browser testing complete
- ✅ Mobile testing complete
- ✅ PDF export working correctly
- ✅ Deployment successful
- ✅ Domain configured
- ✅ SSL certificate active

### Launch Day
- **Date:** January 2025
- **URL:** https://resumemaker.42-it.com
- **Status:** Ready for public launch

## 📈 Post-MVP Roadmap

### Phase 1 (v1.1) - Enhancement
- Additional resume templates
- Cover letter generator
- Resume scoring/optimization
- Social media integration

### Phase 2 (v1.2) - Advanced Features
- AI-powered resume suggestions
- Collaboration features
- Advanced PDF customization
- Integration with job boards

### Phase 3 (v2.0) - Platform Expansion
- Mobile app development
- PWA capabilities
- Offline mode
- Advanced analytics

## 🎯 MVP Success Definition

### Technical Success
- ✅ All features work as specified
- ✅ Performance meets requirements
- ✅ No critical bugs in production
- ✅ 99.9% uptime achieved

### User Success
- ✅ Users can complete resume creation
- ✅ PDF exports work correctly
- ✅ Interface is intuitive and responsive
- ✅ Positive user feedback received

### Business Success
- ✅ Application is live and accessible
- ✅ Domain is properly configured
- ✅ Deployment pipeline is automated
- ✅ Ready for user acquisition

---

**MVP Version:** 1.0.0  
**Launch Date:** January 2025  
**Status:** ✅ Complete and Ready for Launch 
```n

## File: scala.readme.md

```markdown
![logo](resumaker_icon.png)

# Resu-Maker

A **Scala-based resume generator** that creates professional PDF resumes using LaTeX. Built with functional programming principles and type-safe domain modeling.

## Features

- **Type-Safe Resume Data**: Strongly typed domain model prevents data inconsistencies
- **Professional PDF Output**: Clean, professional formatting with clickable links
- **Hot Reloading**: Live preview with automatic recompilation during development
- **Functional Programming**: Built with Cats Effect for pure functional programming
- **Rich Resume Model**: Supports multiple jobs per workplace, skills tracking, and various education types

## Architecture

The project is structured around three main components:

- **`Entities.scala`**: Domain model with case classes for resume data
- **`Latex.scala`**: LaTeX generation and PDF compilation
- **`Main.scala`**: Application entry point with resume data

## Prerequisites

### LaTeX Installation
```shell
# Ubuntu/Debian
sudo apt install texlive-latex-extra

# macOS (using Homebrew)
brew install --cask mactex

# Windows
# Download and install MiKTeX from https://miktex.org/
```

### Scala/SBT
Ensure you have SBT installed. The project uses Scala 3.6.4.

## Quick Start

1. **Clone the repository**
   ```shell
   git clone https://github.com/kadenjtaylor/resumaker.git
   cd resumaker
   ```

2. **Run the application**
   ```shell
   sbt run
   ```

3. **Check the output**
   Look in the `latex/` directory for your generated PDF resume!

## Development Workflow

### Live Development
For real-time updates during development:

```shell
sbt ~run
```

This will watch for file changes and automatically recompile your resume.

### Customizing Your Resume

1. **Edit the resume data** in `src/main/scala/dev/kaden/Main.scala`
2. **Modify the LaTeX template** in `src/main/scala/dev/kaden/Latex.scala` if needed
3. **Run the application** to see your changes

## Project Structure

```
resumaker/
├── src/main/scala/dev/kaden/
│   ├── Entities.scala      # Domain model and data structures
│   ├── Latex.scala         # LaTeX generation and compilation
│   └── Main.scala          # Application entry point
├── latex/                  # Generated LaTeX files and PDF output
├── build.sbt              # SBT build configuration
└── README.md              # This file
```

## Resume Data Model

The project uses a rich, type-safe domain model:

- **Contact Information**: Phone numbers, email addresses, location
- **Experience**: Workplaces with multiple jobs, skills, and technologies
- **Education**: Degrees, diplomas, and certifications
- **Extras**: Additional information and achievements

### Example Resume Structure

```scala
val myResume = Resume(
  Header(
    name = "Your Name",
    tagline = "Your professional tagline",
    contactInfo = ContactInfo(phone, email),
    location = Location(city, state)
  ),
  Experience(
    Workplace(
      name = "Company Name",
      link = "https://company.com",
      blurb = "Company description",
      tenure = Past(startDate, endDate),
      SoftwareJob(
        title = "Software Engineer",
        description = "Job description",
        skillsAndTools = List("Kafka", "Docker"),
        langsAndLibs = Map("Scala" -> List("Cats-Effect", "Http4s"))
      )
    )
  ),
  Education(
    EducationRecord(
      institution = "University Name",
      link = "https://university.edu",
      awarded = 2020,
      proof = Degree("Computer Science")
    )
  ),
  Extras(
    Element("Additional achievements and interests")
  ),
  Footer("https://github.com/yourusername/resumaker", LocalDate.now())
)
```

## Technical Stack

- **Scala 3.6.4**: Modern Scala with latest language features
- **Cats Effect 3.3.12**: Functional programming library for effects
- **SBT**: Build tool and dependency management
- **LaTeX**: PDF generation and formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `sbt run`
5. Submit a pull request

## License

This project is open source. Feel free to use it for your own resume generation needs.

## Author

Created by [Kaden Taylor](https://github.com/kadenjtaylor) - a software engineer passionate about functional programming and clean code.

---

*Generated with ❤️ using Scala and LaTeX*

```n

## File: resume.md

```markdown
# Kaden Taylor

*I like building things, solving problems, and building things that solve problems.*

📧 kadenjtaylor@gmail.com
📱 (480) 734-8791
📍 Tucson, Arizona

## 💼 Experience

### Crunchbase
**Platform Engineer**
*2022 - 2025*

Discovery Team

**Skills:** Kafka, Docker, Kubernetes, Debezium

### Axoni
**Software Engineer**
*2021 - 2022*

Platform Team

**Skills:** Kubernetes, Docker, Debezium

### Academia.edu
**Full-Stack Software Engineer**
*2020 - 2021*

Short-form academic publishing: `Academia Letters`

### Google
**Software Engineer**
*2019 - 2020*

Android Messages App

**Skills:** Blaze, Piper

### Usercare Inc
**Fly.me - Software Engineer**
*2017 - 2019*

Online Travel Agency

### Amadeus Revenue Integrity
**Software Engineer**
*2016 - 2017*

Domin Modeling, Optimization

**Skills:** RabbitMQ

## 🎓 Education

### University of Arizona
**B.S. Computer Science**
*2016*

### Gilbert High School
**General Studies**
*2012*

## ⚡ Skills

Kafka, Docker, Kubernetes, Debezium, Scala, Ruby, Javascript, Blaze, Piper, Java, Clojure, Neo4j, RabbitMQ, Ansible, Consul, Fabio, APL

## 🏆 Additional Information

• Runner-up on The FOX network gameshow,SuperHuman
• Received 'Startup Tucson Award' at UA Hackathon '15 for Pebble Smartwatch app design
• Passionate about domain modeling andimproving program understandability

```n

## File: kaden-scala-data.json

```json
{
  "header": {
    "name": "Kaden Taylor",
    "tagline": "I like building things, solving problems, and building things that solve problems.",
    "contactInfo": {
      "phoneNumber": {
        "areaCode": 480,
        "prefix": 734,
        "suffix": 8791
      },
      "email": {
        "host": "kadenjtaylor",
        "domain": "gmail.com"
      }
    },
    "location": {
      "city": "Tucson",
      "state": {
        "name": "Arizona",
        "abbrev": "AZ"
      }
    }
  },
  "experience": {
    "workplaces": [
      {
        "name": "Crunchbase",
        "link": "https://crunchbase.com",
        "blurb": "Data and Predictions on Private Companies",
        "tenure": {
          "type": "Past",
          "start": "2022-09-26",
          "end": "2025-02-24"
        },
        "jobs": [
          {
            "title": "Platform Engineer",
            "description": "Discovery Team",
            "skillsAndTools": ["Kafka", "Docker", "Kubernetes", "Debezium"],
            "langsAndLibs": {
              "Scala": ["Cats-Effect", "Http4s"]
            }
          }
        ]
      },
      {
        "name": "Axoni",
        "link": "https://axoni.com",
        "blurb": "Fin-tech startup specializing in 'Distributed Ledger Technology'",
        "tenure": {
          "type": "Past",
          "start": "2021-06-01",
          "end": "2022-07-01"
        },
        "jobs": [
          {
            "title": "Software Engineer",
            "description": "Platform Team",
            "skillsAndTools": ["Kubernetes", "Docker", "Debezium"],
            "langsAndLibs": {
              "Scala": ["Cats-Effect", "ZIO", "Http4s", "Doobie"]
            }
          }
        ]
      },
      {
        "name": "Academia.edu",
        "link": "https://academia.edu",
        "blurb": "Making research available",
        "tenure": {
          "type": "Past",
          "start": "2021-01-01",
          "end": "2021-06-01"
        },
        "jobs": [
          {
            "title": "Full-Stack Software Engineer",
            "description": "Short-form academic publishing: `Academia Letters`",
            "skillsAndTools": [],
            "langsAndLibs": {
              "Ruby": ["Rails"],
              "Javascript": ["React"]
            }
          }
        ]
      },
      {
        "name": "Google",
        "link": "https://google.com",
        "blurb": "Android Messages Team",
        "tenure": {
          "type": "Past",
          "start": "2019-10-01",
          "end": "2020-11-01"
        },
        "jobs": [
          {
            "title": "Software Engineer",
            "description": "Android Messages App",
            "skillsAndTools": ["Blaze", "Piper"],
            "langsAndLibs": {
              "Java": ["Dagger"]
            }
          }
        ]
      },
      {
        "name": "Usercare Inc",
        "link": "https://www.crunchbase.com/organization/usercare",
        "blurb": "Startup in Tucson, Arizona",
        "tenure": {
          "type": "Past",
          "start": "2017-08-01",
          "end": "2019-07-01"
        },
        "jobs": [
          {
            "title": "Fly.me - Software Engineer",
            "description": "Online Travel Agency",
            "skillsAndTools": [],
            "langsAndLibs": {
              "Clojure": []
            }
          },
          {
            "title": "Agent.AI - Software Engineer",
            "description": "Chatbots as a Service",
            "skillsAndTools": ["Neo4j"],
            "langsAndLibs": {
              "Java": ["Dropwizard", "Guice"]
            }
          }
        ]
      },
      {
        "name": "Amadeus Revenue Integrity",
        "link": "https://amadeus.com/en/portfolio/airlines/revenue-integrity",
        "blurb": "Various Flight-Firming Products",
        "tenure": {
          "type": "Past",
          "start": "2016-03-01",
          "end": "2017-08-01"
        },
        "jobs": [
          {
            "title": "Software Engineer",
            "description": "Domin Modeling, Optimization",
            "skillsAndTools": ["RabbitMQ"],
            "langsAndLibs": {
              "Java": ["Dropwizard", "Guice"]
            }
          },
          {
            "title": "Software R+D Intern",
            "description": "Fun research stuff",
            "skillsAndTools": ["Ansible", "Consul", "Fabio"],
            "langsAndLibs": {
              "APL": [],
              "Java": []
            }
          }
        ]
      }
    ]
  },
  "education": {
    "certifcations": [
      {
        "instituion": "University of Arizona",
        "link": "https://www.cs.arizona.edu/",
        "awarded": 2016,
        "proof": {
          "type": "Degree",
          "areaOfStudy": "B.S. Computer Science"
        }
      },
      {
        "instituion": "Gilbert High School",
        "link": "https://www.gilbertschools.net/gilberthigh",
        "awarded": 2012,
        "proof": {
          "type": "Diploma",
          "areaOfStudy": "General Studies"
        }
      }
    ]
  },
  "extras": {
    "elements": [
      {
        "contentChunks": [
          "Runner-up on The FOX network gameshow,",
          {
            "text": "SuperHuman",
            "link": "https://www.youtube.com/watch?v=t65mzlOCDF8"
          }
        ]
      },
      {
        "contentChunks": [
          "Received 'Startup Tucson Award' at UA Hackathon '15 for Pebble Smartwatch app design"
        ]
      },
      {
        "contentChunks": [
          "Passionate about domain modeling and",
          {
            "text": "improving program understandability",
            "link": "https://www.kaden.dev/pages/musings/software_doesnt_have_clay.html"
          }
        ]
      }
    ]
  },
  "metadata": {
    "createdByLink": "https://github.com/kadenjtaylor/resumaker",
    "creationDate": "2024-01-01"
  }
} 
```n

## File: write-blah.ps1

```powershell
param (
    [string]$OutputFile = "resumaker-source-code.md"
)

Clear-Host
Write-Host "Gathering Resume Maker source code files..." -ForegroundColor Yellow

# Define source directories and file extensions
$SourceDirs = @(
    "src",
    "lib"
)
$FileExtensions = @("*.tsx", "*.ts", "*.js", "*.jsx", "*.css", "*.mjs", "*.json", "*.md", "*.txt", "*.ps1", "*.yml", "*.yaml", "*.config", "*.env*")

# Define specific root files to include - EXPANDED LIST
$RootFiles = @(
    "package.json",
    "package-lock.json",
    "next.config.ts",
    "next.config.js",
    "tsconfig.json",
    "tailwind.config.ts",
    "tailwind.config.js",
    "postcss.config.mjs",
    "README.md",
    "PRD.md",
    "MVP.md",
    "scala.readme.md",
    "resume.md",
    "kaden-scala-data.json",
    "cala_resumemaker submodule to fix build",
    "write-blah.ps1",
    "next-env.d.ts",
    ".gitignore"
)

# Dynamic File Discovery
$FilesToInclude = @()
$FilesToInclude += $RootFiles | ForEach-Object { Get-Item -Path $_ -ErrorAction SilentlyContinue }
foreach ($dir in $SourceDirs) {
    if (Test-Path $dir) {
        $FilesToInclude += Get-ChildItem -Path $dir -Recurse -Include $FileExtensions -ErrorAction SilentlyContinue
    }
}

# Also scan for any additional files in root that might be relevant
$AdditionalRootFiles = Get-ChildItem -Path "." -File -Include "*.md", "*.json", "*.ts", "*.js", "*.ps1", "*.txt", "*.config*" | Where-Object { 
    $_.Name -notin $RootFiles -and 
    $_.Name -notlike "*.lock" -and 
    $_.Name -notlike "node_modules*" -and
    $_.Name -notlike ".git*" -and
    $_.Name -notlike ".next*" -and
    $_.Name -notlike "out*"
}
$FilesToInclude += $AdditionalRootFiles

$MarkdownContent = "# 🔍 Resume Maker Source Code Dump`n`n"
$MarkdownContent += "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')`n`n"
$MarkdownContent += "## Project: Next.js Resume Generator with PDF Export`n`n"

foreach ($file in $FilesToInclude) {
    if ($file -and (Test-Path $file.FullName)) {
        $RelativeFilePath = $file.FullName.Substring($PSScriptRoot.Length + 1)
        
        # Skip binary files and non-text files
        $FileExtension = $file.Extension.TrimStart('.').ToLower()
        if ($FileExtension -in @('png', 'jpg', 'jpeg', 'gif', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'eot', 'pdf', 'zip', 'exe', 'dll', 'so', 'dylib')) {
            continue
        }
        
        $MarkdownContent += "`n## File: $RelativeFilePath`n`n"

        try {
            Write-Host "Processing: $RelativeFilePath" -ForegroundColor Green
            
            $FileContent = Get-Content -Path $file.FullName -Raw -ErrorAction Stop

            if ([string]::IsNullOrWhiteSpace($FileContent)) {
                $MarkdownContent += "*File is empty*`n"
                continue
            }

            # Check if content looks like text (not binary)
            if ($FileContent -match '[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F]') {
                $LanguageSyntax = switch ($FileExtension) {
                    { $_ -in @('ts', 'tsx') } { 'typescript' }
                    'js'   { 'javascript' }
                    'mjs'  { 'javascript' }
                    'json' { 'json' }
                    'md'   { 'markdown' }
                    'css'  { 'css' }
                    'ps1'  { 'powershell' }
                    'yml'  { 'yaml' }
                    'yaml' { 'yaml' }
                    default { '' }
                }

                $MarkdownContent += "``````$LanguageSyntax`n"
                $MarkdownContent += $FileContent
                $MarkdownContent += "`n``````n`n"
            } else {
                $MarkdownContent += "*Binary file - skipped*`n`n"
            }
        }
        catch {
            Write-Warning "Could not read file: '$RelativeFilePath'. Error: $($_.Exception.Message)"
            $MarkdownContent += "*Could not read file: $($_.Exception.Message)*`n`n"
        }
    }
}

# Add footer
$MarkdownContent += "`n---`n"
$MarkdownContent += "*Generated by Write-blah.ps1 for Resume Maker (Next.js + jsPDF)*`n"

try {
    $MarkdownContent | Out-File -FilePath $OutputFile -Encoding UTF8 -Force
    Write-Host "`n✅ Success! Source code written to '$OutputFile'" -ForegroundColor Green
    Write-Host "📦 File size: $((Get-Item $OutputFile).Length) bytes" -ForegroundColor Cyan
    Write-Host "`n📋 Ready to share with LLM for debugging PDF export issues" -ForegroundColor Yellow
}
catch {
    Write-Error "❌ Failed to write output file '$OutputFile': $($_.Exception.Message)"
    exit 1
}

```n

## File: next-env.d.ts

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```n

## File: .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
Thumbs.db
ehthumbs.db
Desktop.ini

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Temporary folders
tmp/
temp/

# Scala project files (local reference only)
scala_resumemaker/

```n

## File: src\app\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Emoji support & print‑export patch ─────────────── */
html {
  font-family: "Noto Color Emoji",
               system-ui, -apple-system,
               "Segoe UI", Roboto, sans-serif;
}

/* Ensure white pages when html2canvas/jsPDF rasterise */
@media print {
  body { background:#ffffff !important; color:#000000 !important; }
}
/* ────────────────────────────────────────────────────── */

/* --- existing custom CSS continues below --- */

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

```n

## File: src\app\layout.tsx

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* colour‑emoji font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

```n

## File: src\app\page.tsx

```typescript
import ResumeGenerator from '../components/ResumeGenerator';

export default function Home() {
  return <ResumeGenerator />;
}

```n

## File: src\components\PDFDownloadButton.tsx

```typescript
'use client';

import React, { useRef } from 'react';
import { Download } from 'lucide-react';

interface PDFDownloadButtonProps {
  resumeData: any;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ resumeData }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!printRef.current) return;

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download PDF');
      return;
    }

    // Generate the resume HTML
    const resumeHTML = generateResumeHTML(resumeData);

    // Write the HTML to the new window
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${resumeData.header?.name || 'Your Name'}</title>
          <style>
            @media print {
              body { margin: 0; padding: 20px; }
              .resume { max-width: 8.5in; margin: 0 auto; }
            }
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .header { margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px; }
            .name { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
            .tagline { font-size: 16px; color: #666; margin-bottom: 10px; }
            .contact-info { margin-bottom: 15px; }
            .contact-item { margin: 2px 0; }
            .section { margin-bottom: 20px; }
            .section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #ccc; }
            .experience-item { margin-bottom: 15px; }
            .job-header { display: flex; justify-content: space-between; margin-bottom: 5px; }
            .job-title { font-weight: bold; }
            .company-name { font-weight: bold; color: #333; }
            .job-duration { color: #666; font-style: italic; }
            .job-description { margin-top: 5px; }
            .skills-container { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px; }
            .skill-tag { background: #f0f0f0; padding: 2px 8px; border-radius: 3px; font-size: 12px; }
            .education-item { margin-bottom: 10px; }
            .education-header { display: flex; justify-content: space-between; margin-bottom: 3px; }
            .institution-name { font-weight: bold; }
            .education-year { color: #666; }
            .degree-info { font-style: italic; }
            .extras-item { margin: 2px 0; }
          </style>
        </head>
        <body>
          <div class="resume">
            ${resumeHTML}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();

    // Wait for content to load, then print
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  const generateResumeHTML = (data: any) => {
    return `
      <div class="header">
        <div class="name">${data.header?.name || 'Your Name'}</div>
        <div class="tagline">${data.header?.tagline || 'Your Professional Title'}</div>
        <div class="contact-info">
          ${data.header?.contact?.email ? `<div class="contact-item">📧 ${data.header.contact.email}</div>` : ''}
          ${data.header?.contact?.phone ? `<div class="contact-item">📱 ${data.header.contact.phone}</div>` : ''}
          ${(data.header?.location?.city || data.header?.location?.state) ? 
            `<div class="contact-item">📍 ${[data.header.location.city, data.header.location.state].filter(Boolean).join(', ')}</div>` : ''}
        </div>
      </div>

      ${data.experience && data.experience.length > 0 ? `
        <div class="section">
          <div class="section-title">💼 Experience</div>
          ${data.experience.map((exp: any) => `
            <div class="experience-item">
              <div class="job-header">
                <div class="company-name">${exp.name}</div>
                ${exp.tenure ? `<div class="job-duration">${exp.tenure}</div>` : ''}
              </div>
              ${exp.jobs ? exp.jobs.map((job: any) => `
                <div>
                  <div class="job-title">${job.title}</div>
                  ${job.description ? `<div class="job-description">${job.description}</div>` : ''}
                  ${(job.skills?.length > 0 || job.languages?.length > 0) ? `
                    <div class="skills-container">
                      ${job.skills?.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('') || ''}
                      ${job.languages?.map((lang: string) => `<span class="skill-tag">${lang}</span>`).join('') || ''}
                    </div>
                  ` : ''}
                </div>
              `).join('') : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${data.education && data.education.length > 0 ? `
        <div class="section">
          <div class="section-title">🎓 Education</div>
          ${data.education.map((edu: any) => `
            <div class="education-item">
              <div class="education-header">
                <div class="institution-name">${edu.institution}</div>
                ${edu.year ? `<div class="education-year">${edu.year}</div>` : ''}
              </div>
              ${edu.degree ? `<div class="degree-info">${edu.degree}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${data.skills && data.skills.length > 0 ? `
        <div class="section">
          <div class="section-title">⚡ Skills</div>
          <div class="skills-container">
            ${data.skills.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${data.extras && data.extras.length > 0 ? `
        <div class="section">
          <div class="section-title">🏆 Additional Information</div>
          ${data.extras.map((extra: string) => `<div class="extras-item">• ${extra}</div>`).join('')}
        </div>
      ` : ''}
    `;
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      <Download className="h-4 w-4" />
      <span>Export PDF</span>
    </button>
  );
}; 
```n

## File: src\components\ResumeGenerator.tsx

```typescript
'use client';

import React, { useState, useEffect } from 'react';
import { Download, Plus, Trash2, Moon, Sun, FileText, User, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import { PDFDownloadButton } from './PDFDownloadButton';

// TypeScript interfaces
interface ContactInfo {
  phone: string;
  email: string;
}

interface Location {
  city: string;
  state: string;
}

interface SoftwareJob {
  title: string;
  description: string;
  skills: string[];
  languages: string[];
}

interface Workplace {
  name: string;
  link: string;
  blurb: string;
  tenure: string;
  jobs: SoftwareJob[];
}

interface EducationRecord {
  institution: string;
  link: string;
  year: string;
  degree: string;
}

interface Resume {
  header: {
    name: string;
    tagline: string;
    contact: ContactInfo;
    location: Location;
  };
  experience: Workplace[];
  education: EducationRecord[];
  skills: string[];
  extras: string[];
}

// Sample data
const sampleResume: Resume = {
  header: {
    name: "Alex Johnson",
    tagline: "Full Stack Software Engineer",
    contact: {
      phone: "(555) 123-4567",
      email: "alex.johnson@email.com"
    },
    location: {
      city: "San Francisco",
      state: "CA"
    }
  },
  experience: [
    {
      name: "TechCorp Inc.",
      link: "https://techcorp.com",
      blurb: "Leading technology company focused on cloud solutions",
      tenure: "2022 - Present",
      jobs: [
        {
          title: "Senior Software Engineer",
          description: "Led development of microservices architecture serving 1M+ users daily",
          skills: ["React", "Node.js", "AWS", "Docker"],
          languages: ["TypeScript", "Python", "Go"]
        }
      ]
    },
    {
      name: "StartupXYZ",
      link: "https://startupxyz.com",
      blurb: "Early-stage fintech startup",
      tenure: "2020 - 2022",
      jobs: [
        {
          title: "Full Stack Developer",
          description: "Built and deployed scalable web applications from scratch",
          skills: ["Vue.js", "Express", "PostgreSQL", "Redis"],
          languages: ["JavaScript", "Python"]
        }
      ]
    }
  ],
  education: [
    {
      institution: "Stanford University",
      link: "https://stanford.edu",
      year: "2020",
      degree: "B.S. Computer Science"
    }
  ],
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
  extras: ["Open source contributor to React ecosystem", "Speaker at tech conferences", "AWS Certified Solutions Architect"]
};

const ResumeGenerator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('modern');
  const [resumeData, setResumeData] = useState<Resume>(sampleResume);

  useEffect(() => {
    const saved = localStorage.getItem('resume-data');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        // Only load if the data has the expected structure
        if (parsedData && parsedData.header && parsedData.experience && parsedData.education) {
          setResumeData(parsedData);
        }
      } catch (e) {
        console.error('Failed to load saved data:', e);
        // If parsing fails, keep the sample data
      }
    }
    // If no saved data or invalid data, keep the sample data
  }, []);

  useEffect(() => {
    localStorage.setItem('resume-data', JSON.stringify(resumeData));
  }, [resumeData]);

  // Debug: Log when resumeData changes
  useEffect(() => {
    console.log('resumeData changed:', resumeData);
    console.log('Experience count:', resumeData.experience?.length || 0);
    console.log('Education count:', resumeData.education?.length || 0);
  }, [resumeData]);

  const updateResumeData = (path: string, value: any) => {
    setResumeData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (key.includes('[') && key.includes(']')) {
          const [arrayKey, indexStr] = key.split('[');
          const index = parseInt(indexStr.replace(']', ''));
          if (!current[arrayKey]) current[arrayKey] = [];
          if (!current[arrayKey][index]) current[arrayKey][index] = {};
          current = current[arrayKey][index];
        } else {
          if (!current[key]) current[key] = {};
          current = current[key];
        }
      }
      
      const lastKey = keys[keys.length - 1];
      if (lastKey.includes('[') && lastKey.includes(']')) {
        const [arrayKey, indexStr] = lastKey.split('[');
        const index = parseInt(indexStr.replace(']', ''));
        if (!current[arrayKey]) current[arrayKey] = [];
        current[arrayKey][index] = value;
      } else {
        current[lastKey] = value;
      }
      
      return newData;
    });
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        name: '',
        link: '',
        blurb: '',
        tenure: '',
        jobs: [{
          title: '',
          description: '',
          skills: [],
          languages: []
        }]
      }]
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        institution: '',
        link: '',
        year: '',
        degree: ''
      }]
    }));
  };

  const removeEducation = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  // React PDF export is handled by PDFDownloadLink component

  const exportToJSON = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.json';
    link.click();
  };

  const exportToMarkdown = () => {
    let markdown = `# ${resumeData.header?.name || 'Your Name'}\n\n`;
    markdown += `*${resumeData.header?.tagline || 'Your Professional Title'}*\n\n`;
    
    // Contact Information with emojis
    markdown += `📧 ${resumeData.header?.contact?.email || ''}\n`;
    markdown += `📱 ${resumeData.header?.contact?.phone || ''}\n`;
    markdown += `📍 ${resumeData.header?.location?.city || ''}, ${resumeData.header?.location?.state || ''}\n\n`;
    
    // Experience
    if (resumeData.experience && resumeData.experience.length > 0) {
      markdown += `## 💼 Experience\n\n`;
      resumeData.experience.forEach((exp) => {
        markdown += `### ${exp.name}\n`;
        if (exp.jobs?.[0]?.title) {
          markdown += `**${exp.jobs[0].title}**\n`;
        }
        if (exp.tenure) {
          markdown += `*${exp.tenure}*\n\n`;
        }
        if (exp.jobs?.[0]?.description) {
          markdown += `${exp.jobs[0].description}\n\n`;
        }
        if (exp.jobs?.[0]?.skills && exp.jobs[0].skills.length > 0) {
          markdown += `**Skills:** ${exp.jobs[0].skills.join(', ')}\n\n`;
        }
      });
    }
    
    // Education
    if (resumeData.education && resumeData.education.length > 0) {
      markdown += `## 🎓 Education\n\n`;
      resumeData.education.forEach((edu) => {
        markdown += `### ${edu.institution}\n`;
        markdown += `**${edu.degree}**\n`;
        markdown += `*${edu.year}*\n\n`;
      });
    }
    
    // Skills
    if (resumeData.skills && resumeData.skills.length > 0) {
      markdown += `## ⚡ Skills\n\n`;
      markdown += `${resumeData.skills.join(', ')}\n\n`;
    }
    
    // Additional Information
    if (resumeData.extras && resumeData.extras.length > 0) {
      markdown += `## 🏆 Additional Information\n\n`;
      resumeData.extras.forEach((extra) => {
        markdown += `• ${extra}\n`;
      });
    }
    
    const dataBlob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.md';
    link.click();
  };

  const convertMarkdownToStyledHTML = (markdown: string) => {
    let html = `
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Inter', 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', 'Helvetica', 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 612px; /* 8.5 inches at 72 DPI */
              margin: 0 auto;
              padding: 40px;
              font-size: 12px;
              background-color: white;
            }
            h1 {
              color: #2563eb;
              font-size: 24px;
              margin-bottom: 10px;
              border-bottom: 2px solid #dbeafe;
              padding-bottom: 10px;
              font-weight: 700;
            }
            h2 {
              color: #2563eb;
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 12px;
              border-bottom: 1px solid #dbeafe;
              padding-bottom: 5px;
              font-weight: 600;
            }
            h3 {
              color: #1f2937;
              font-size: 14px;
              margin-top: 12px;
              margin-bottom: 4px;
              font-weight: 600;
            }
            p {
              margin: 6px 0;
              font-size: 12px;
            }
            .contact-info {
              display: flex;
              flex-wrap: wrap;
              gap: 15px;
              margin: 12px 0;
              font-size: 12px;
              color: #6b7280;
            }
            .contact-item {
              display: flex;
              align-items: center;
              gap: 4px;
              font-size: 12px;
            }
            .skill-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 6px;
              margin: 8px 0;
            }
            .skill-tag {
              background-color: #dbeafe;
              color: #1e40af;
              border-radius: 12px;
              padding: 4px 8px;
              font-size: 10px;
              font-weight: 500;
              display: inline-block;
            }
            .job-title {
              color: #2563eb;
              font-weight: 600;
              margin: 4px 0;
              font-size: 12px;
            }
            .job-duration {
              color: #6b7280;
              font-style: italic;
              margin: 4px 0;
              font-size: 11px;
            }
            .job-description {
              margin: 8px 0;
              color: #374151;
              font-size: 12px;
            }
            .education-item {
              margin: 12px 0;
              padding: 8px;
              background-color: #f9fafb;
              border-radius: 6px;
            }
            .education-degree {
              color: #2563eb;
              font-weight: 500;
              font-size: 12px;
            }
            .education-year {
              color: #6b7280;
              font-size: 11px;
            }
            ul {
              margin: 8px 0;
              padding-left: 16px;
            }
            li {
              margin: 4px 0;
              font-size: 12px;
            }
            /* Emoji support */
            .emoji {
              font-family: 'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif;
              font-size: 14px;
              vertical-align: middle;
            }
          </style>
        </head>
        <body>
    `;

    // Convert markdown to HTML with custom styling
    let lines = markdown.split('\n');
    let inSkillsSection = false;
    let inExperienceSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!line) {
        html += '<br>';
        continue;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        html += `<h1>${line.substring(2)}</h1>`;
      } else if (line.startsWith('## ')) {
        const section = line.substring(3);
        html += `<h2>${section}</h2>`;
        inSkillsSection = section.includes('Skills');
        inExperienceSection = section.includes('Experience');
      } else if (line.startsWith('### ')) {
        html += `<h3>${line.substring(4)}</h3>`;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        // Job title
        const title = line.substring(2, line.length - 2);
        html += `<div class="job-title">${title}</div>`;
      } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        // Job duration
        const duration = line.substring(1, line.length - 1);
        html += `<div class="job-duration">${duration}</div>`;
      } else if (line.startsWith('📧') || line.startsWith('📱') || line.startsWith('📍')) {
        // Contact info with emojis
        if (i === lines.findIndex(l => l.startsWith('📧'))) {
          html += '<div class="contact-info">';
        }
        const emoji = line.substring(0, 2);
        const text = line.substring(2).trim();
        html += `<div class="contact-item"><span class="emoji">${emoji}</span>${text}</div>`;
        if (i === lines.findIndex(l => l.startsWith('📍')) || i === lines.length - 1) {
          html += '</div>';
        }
      } else if (line.startsWith('**Skills:**')) {
        // Skills section with oval tags
        const skillsText = line.substring(11).trim();
        const skills = skillsText.split(',').map(s => s.trim());
        html += '<div class="skill-tags">';
        skills.forEach(skill => {
          html += `<span class="skill-tag">${skill}</span>`;
        });
        html += '</div>';
      } else if (inSkillsSection && line.includes(',')) {
        // Skills list with oval tags
        const skills = line.split(',').map(s => s.trim());
        html += '<div class="skill-tags">';
        skills.forEach(skill => {
          html += `<span class="skill-tag">${skill}</span>`;
        });
        html += '</div>';
      } else if (line.startsWith('• ')) {
        // List items
        html += `<li>${line.substring(2)}</li>`;
      } else {
        // Regular paragraph
        html += `<p>${line}</p>`;
      }
    }

    html += `
        </body>
      </html>
    `;

    return html;
  };

  const loadSampleData = () => {
    console.log('Loading sample data:', sampleResume);
    setResumeData(sampleResume);
  };

  // Debug function to check current state
  const debugCurrentData = () => {
    console.log('Current resumeData:', resumeData);
    console.log('Experience length:', resumeData.experience?.length);
    console.log('Education length:', resumeData.education?.length);
    console.log('Skills length:', resumeData.skills?.length);
    console.log('Extras length:', resumeData.extras?.length);
  };

  // Convert Scala format to Next.js format
  const importScalaData = (scalaData: any) => {
    try {
      console.log('Importing Scala data:', scalaData);
      
      // Helper function to format phone number
      const formatPhone = (phoneObj: any) => {
        if (phoneObj && phoneObj.areaCode && phoneObj.prefix && phoneObj.suffix) {
          return `(${phoneObj.areaCode}) ${phoneObj.prefix}-${phoneObj.suffix}`;
        }
        return phoneObj?.toString() || '';
      };

      // Helper function to format email
      const formatEmail = (emailObj: any) => {
        if (emailObj && emailObj.host && emailObj.domain) {
          return `${emailObj.host}@${emailObj.domain}`;
        }
        return emailObj?.toString() || '';
      };

      // Helper function to format tenure
      const formatTenure = (tenureObj: any) => {
        if (tenureObj && tenureObj.start && tenureObj.end) {
          const startYear = new Date(tenureObj.start).getFullYear();
          const endYear = new Date(tenureObj.end).getFullYear();
          return `${startYear} - ${endYear}`;
        }
        return tenureObj?.toString() || '';
      };

      // Helper function to format education proof
      const formatEducationProof = (proofObj: any) => {
        if (proofObj && proofObj.areaOfStudy) {
          return proofObj.areaOfStudy;
        }
        return proofObj?.toString() || '';
      };

      const converted: Resume = {
        header: {
          name: scalaData.header?.name || 'Your Name',
          tagline: scalaData.header?.tagline || 'Your Professional Title',
          contact: {
            phone: formatPhone(scalaData.header?.contactInfo?.phoneNumber),
            email: formatEmail(scalaData.header?.contactInfo?.email)
          },
          location: {
            city: scalaData.header?.location?.city || '',
            state: scalaData.header?.location?.state?.name || ''
          }
        },
        experience: (scalaData.experience?.workplaces || []).map((workplace: any) => ({
          name: workplace.name || '',
          link: workplace.link || '',
          blurb: workplace.blurb || '',
          tenure: formatTenure(workplace.tenure),
          jobs: (workplace.jobs || []).map((job: any) => ({
            title: job.title || '',
            description: job.description || '',
            skills: job.skillsAndTools || [],
            languages: Object.keys(job.langsAndLibs || {}).flatMap(lang => 
              job.langsAndLibs[lang] || [lang]
            )
          }))
        })),
        education: (scalaData.education?.certifcations || []).map((edu: any) => ({
          institution: edu.instituion || '',
          link: edu.link || '',
          year: edu.awarded?.toString() || '',
          degree: formatEducationProof(edu.proof)
        })),
        skills: (scalaData.experience?.workplaces || []).flatMap((workplace: any) =>
          (workplace.jobs || []).flatMap((job: any) => 
            [...(job.skillsAndTools || []), ...Object.keys(job.langsAndLibs || {})]
          )
        ).filter((skill: string, index: number, arr: string[]) => 
          arr.indexOf(skill) === index
        ),
        extras: (scalaData.extras?.elements || []).map((element: any) => 
          (element.contentChunks || []).map((chunk: any) => 
            typeof chunk === 'string' ? chunk : chunk.text
          ).join('')
        )
      };
      
      console.log('Converted data:', converted);
      setResumeData(converted);
      alert('Scala data imported successfully!');
    } catch (error) {
      console.error('Error importing Scala data:', error);
      alert('Error importing Scala data. Please check the format.');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`border-b transition-colors ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Resume Generator
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={activeTemplate}
                onChange={(e) => setActiveTemplate(e.target.value)}
                className={`px-3 py-2 rounded-md border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
                <option value="minimal">Minimal</option>
              </select>
              <button
                onClick={loadSampleData}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Load Sample
              </button>
              <button
                onClick={() => {
                  // Create a file input for importing Scala data
                  const input = document.createElement('input');
                  input.type = 'file';
                  input.accept = '.json';
                  input.onchange = (e) => {
                    const file = (e.target as HTMLInputElement).files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        try {
                          const scalaData = JSON.parse(e.target?.result as string);
                          importScalaData(scalaData);
                        } catch (error) {
                          alert('Error reading file. Please ensure it\'s a valid JSON file.');
                        }
                      };
                      reader.readAsText(file);
                    }
                  };
                  input.click();
                }}
                className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                title="Import Scala data from JSON file"
              >
                Import Scala
              </button>
              <button
                onClick={exportToJSON}
                className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                Export JSON
              </button>
              <button
                onClick={exportToMarkdown}
                className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                Export Markdown
              </button>
              <button
                onClick={() => {
                  debugCurrentData();
                  alert('Check console for current data');
                }}
                className="px-4 py-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                title="Debug: Show current data in console"
              >
                Debug Data
              </button>
                              <PDFDownloadButton resumeData={resumeData} />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-md transition-colors ${
                  darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className={`space-y-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">Personal Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name
                  </label>
                  <input
                    value={resumeData.header.name}
                    onChange={(e) => updateResumeData('header.name', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Professional Title
                  </label>
                  <input
                    value={resumeData.header.tagline}
                    onChange={(e) => updateResumeData('header.tagline', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="e.g., Full Stack Developer"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={resumeData.header.contact.email}
                    onChange={(e) => updateResumeData('header.contact.email', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Phone
                  </label>
                  <input
                    value={resumeData.header.contact.phone}
                    onChange={(e) => updateResumeData('header.contact.phone', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    City
                  </label>
                  <input
                    value={resumeData.header.location.city}
                    onChange={(e) => updateResumeData('header.location.city', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="San Francisco"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    State
                  </label>
                  <input
                    value={resumeData.header.location.state}
                    onChange={(e) => updateResumeData('header.location.state', e.target.value)}
                    className={`w-full p-3 rounded-md border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="CA"
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Experience</h2>
                </div>
                <button
                  onClick={addExperience}
                  className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Experience</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Experience {index + 1}</h3>
                      <button
                        onClick={() => removeExperience(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <input
                        value={exp.name}
                        onChange={(e) => updateResumeData(`experience[${index}].name`, e.target.value)}
                        placeholder="Company Name"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={exp.tenure}
                        onChange={(e) => updateResumeData(`experience[${index}].tenure`, e.target.value)}
                        placeholder="2020 - Present"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                    
                    <input
                      value={exp.jobs[0]?.title || ''}
                      onChange={(e) => updateResumeData(`experience[${index}].jobs[0].title`, e.target.value)}
                      placeholder="Job Title"
                      className={`w-full p-2 rounded border mb-3 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                    
                    <textarea
                      value={exp.jobs[0]?.description || ''}
                      onChange={(e) => updateResumeData(`experience[${index}].jobs[0].description`, e.target.value)}
                      rows={3}
                      placeholder="Job description and achievements..."
                      className={`w-full p-2 rounded border mb-3 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                    
                    <input
                      value={exp.jobs[0]?.skills?.join(', ') || ''}
                      onChange={(e) => updateResumeData(`experience[${index}].jobs[0].skills`, e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                      placeholder="Skills: React, Node.js, AWS..."
                      className={`w-full p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Education</h2>
                </div>
                <button
                  onClick={addEducation}
                  className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Education</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">Education {index + 1}</h3>
                      <button
                        onClick={() => removeEducation(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input
                        value={edu.institution}
                        onChange={(e) => updateResumeData(`education[${index}].institution`, e.target.value)}
                        placeholder="Institution Name"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={edu.year}
                        onChange={(e) => updateResumeData(`education[${index}].year`, e.target.value)}
                        placeholder="Graduation Year"
                        className={`p-2 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                      
                      <input
                        value={edu.degree}
                        onChange={(e) => updateResumeData(`education[${index}].degree`, e.target.value)}
                        placeholder="Degree"
                        className={`p-2 rounded border md:col-span-2 transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          darkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-5 w-5 text-blue-500" />
                <h2 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  ⚡ Skills
                </h2>
              </div>
              
              <textarea
                value={resumeData.skills.join(', ')}
                onChange={(e) => updateResumeData('skills', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                rows={3}
                placeholder="JavaScript, TypeScript, React, Node.js, Python..."
                className={`w-full p-3 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            {/* Extras Section */}
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-blue-500" />
                <h2 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  🏆 Additional Information
                </h2>
              </div>
              
              <textarea
                value={resumeData.extras.join('\n')}
                onChange={(e) => updateResumeData('extras', e.target.value.split('\n').filter(Boolean))}
                rows={4}
                placeholder="Awards, certifications, projects, or other achievements..."
                className={`w-full p-3 rounded border transition-colors focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className={`p-6 rounded-lg border transition-colors ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="mb-4">
                <h2 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Live Preview
                </h2>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Template: {activeTemplate.charAt(0).toUpperCase() + activeTemplate.slice(1)}
                </div>
              </div>
              
              {/* Resume Preview */}
              <div id="resume-preview" className={`bg-white text-gray-900 p-8 rounded-lg shadow-lg min-h-[800px] ${
                activeTemplate === 'modern' ? 'border-l-4 border-blue-500' :
                activeTemplate === 'classic' ? 'border border-gray-300' :
                'shadow-none border border-gray-200'
              }`}>
                {/* Header */}
                <div className={`pb-6 mb-6 ${
                  activeTemplate === 'modern' ? 'border-b-2 border-blue-100' :
                  activeTemplate === 'classic' ? 'border-b border-gray-400' :
                  'border-b border-gray-200'
                }`}>
                  <h1 className={`text-3xl font-bold mb-3 ${
                    activeTemplate === 'modern' ? 'text-blue-600' :
                    activeTemplate === 'classic' ? 'text-gray-800' :
                    'text-gray-900'
                  }`}>
                    {resumeData.header?.name || 'Your Name'}
                  </h1>
                  <p className={`text-lg mb-4 italic ${
                    activeTemplate === 'modern' ? 'text-gray-600' :
                    'text-gray-700'
                  }`}>
                    {resumeData.header?.tagline || 'Your Professional Title'}
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <span className="mr-1">📧</span>
                      {resumeData.header?.contact?.email}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📱</span>
                      {resumeData.header?.contact?.phone}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📍</span>
                      {resumeData.header?.location?.city}, {resumeData.header?.location?.state}
                    </span>
                  </div>
                </div>

                {/* Experience */}
                {resumeData.experience && resumeData.experience.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      💼 Experience
                    </h2>
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="mb-6 p-4 border-l-4 border-gray-200 bg-gray-50 rounded-r-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{exp.name}</h3>
                            {exp.jobs?.[0] && (
                              <p className="text-blue-600 font-semibold">{exp.jobs[0].title}</p>
                            )}
                          </div>
                          <span className="text-sm text-gray-500 font-medium bg-white px-2 py-1 rounded">
                            {exp.tenure}
                          </span>
                        </div>
                        {exp.jobs?.[0]?.description && (
                          <p className="text-gray-700 text-sm mb-3 leading-relaxed">{exp.jobs[0].description}</p>
                        )}
                        {exp.jobs?.[0]?.skills && exp.jobs[0].skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.jobs[0].skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                  activeTemplate === 'modern' ? 'bg-blue-100 text-blue-800' :
                                  activeTemplate === 'classic' ? 'bg-gray-200 text-gray-800' :
                                  'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Education */}
                {resumeData.education && resumeData.education.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      🎓 Education
                    </h2>
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{edu.institution}</h3>
                            <p className="text-blue-600 font-medium">{edu.degree}</p>
                          </div>
                          <span className="text-sm text-gray-500 font-medium bg-white px-3 py-1 rounded-full">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills */}
                {resumeData.skills && resumeData.skills.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      ⚡ Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            activeTemplate === 'modern' ? 'bg-blue-100 text-blue-800' :
                            activeTemplate === 'classic' ? 'bg-gray-200 text-gray-800' :
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Information */}
                {resumeData.extras && resumeData.extras.length > 0 && (
                  <div>
                    <h2 className={`text-xl font-semibold mb-4 ${
                      activeTemplate === 'modern' ? 'text-blue-600 border-b border-blue-200 pb-1' :
                      activeTemplate === 'classic' ? 'text-gray-800 border-b border-gray-300 pb-1' :
                      'text-gray-900'
                    }`}>
                      🏆 Additional Information
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {resumeData.extras.map((extra, index) => (
                        <li key={index} className="text-sm">{extra}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator; 
```n

---
*Generated by Write-blah.ps1 for Resume Maker (Next.js + jsPDF)*

