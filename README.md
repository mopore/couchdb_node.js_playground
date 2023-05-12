```
 ▄████████  ▄██████▄  ███    █▄   ▄████████    ▄█    █▄    ████████▄  ▀█████████▄  
███    ███ ███    ███ ███    ███ ███    ███   ███    ███   ███   ▀███   ███    ███ 
███    █▀  ███    ███ ███    ███ ███    █▀    ███    ███   ███    ███   ███    ███ 
███        ███    ███ ███    ███ ███         ▄███▄▄▄▄███▄▄ ███    ███  ▄███▄▄▄██▀  
███        ███    ███ ███    ███ ███        ▀▀███▀▀▀▀███▀  ███    ███ ▀▀███▀▀▀██▄  
███    █▄  ███    ███ ███    ███ ███    █▄    ███    ███   ███    ███   ███    ██▄ 
███    ███ ███    ███ ███    ███ ███    ███   ███    ███   ███   ▄███   ███    ███ 
████████▀   ▀██████▀  ████████▀  ████████▀    ███    █▀    ████████▀  ▄█████████▀  
                                                                                   
```

Source for ASCII-fonts: https://www.coolgenerator.com/ascii-text-generator
(Font: Delta Corps Priest 1


# What is this?
A playground project to test out CouchDB as a database for a NodeJS project.

# What's the motivation?
Having this as potential template for future projects and not only for PAN.

# Installation
Place keys and environment variable values inside a .env file in the project's root folder.
```
NAME=value
```

Just use it as template.
```
npm install
```


# Update all packages to the latest version
`pnpm up --latest` to update all packages to the latest version.

# Add a package to the project
`pnpm add -D <package>` to add a package to the project. The `-D` flag is for development dependencies.


# How to use
Provide an adequate description.
CouchDB is in general REST-based.
To check the connection you can use the following command:
```
curl http://admin:secret_password@localhost:5984
```

Login with: `http://localhost:5984/_utils/`



To create and delete a database you can use the following command:
``` 
curl -X PUT http://admin:secret_password@localhost:5984/<database_name>
curl -X DELETE http://admin:secret_password@localhost:5984/<database_name>
```


Shutdown properly:
```
curl -X POST http://admin:secret_password@localhost:5984/_shutdown
```



# Release History

## v0.1.0 (Untagged)
- Initial commit.
