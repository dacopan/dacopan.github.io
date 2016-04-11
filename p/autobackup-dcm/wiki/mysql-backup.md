---
layout: page
permalink: /p/autobackup-dcm/wiki/mysql-backup/
menu: true
title: Mysql Backup
description: Simple python script to auto backup, rotate backup and upload to google drive.
github-url: dacopan/autobackup-dcm
github-ribbon: |    
    <a class="ribbon" href="https://github.com/dacopan/autobackup-dcm"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
---

# Mysql Backup Script
Please see example included in autobackup-dcm :package:

Script file: `mysql_backup.py`
Config File: `mysql_config.json`

 

```json
[
  {
	 "cfg": {
     "local_backup_dir": "../backup_test_files/jom_backups/",
     "remote_backup_dir": "google_folder_id",
     "google_credentials_name": "jom_google_credentials.json",
     "app_name": "jom",
     "google_authorized": false
    },
    "bk": {
      "last_week": 13,
      "last_year": 2016,
      "last_day": 2,
      "last_month": 4
    },
    "rotate": {
      "local": {
        "monthly": 12,
        "yearly": 2,
        "weekly": 4,
        "daily": 7
      },
      "remote": {
        "monthly": 12,
        "yearly": 3,
        "weekly": 4,
        "daily": 7
      },
      "include_list": [],
      "exclude_list": [],
      "dry_run": false,
      "ionice": "idle",      
    },    
    "custom": {
      "db_user": "jom",
      "db_name": "jom",
      "db_host": "localhost",
      "db_password": "jom"
    }
  },
	  {}
]
```

Key | Type |Mandatory| Description
--- |---|:---:|---
**custom** |JSON Object|:+1:| Mysql configuration of app
db_user|String|:+1:| Mysql User with full acces to database
db_name|String|:+1:| Mysql Database name to backup
db_host|String|:+1:| Host of Mysql (Localhost, Name, or IP)
db_password|String|:+1:| Password of User Database

> If you not want store password, you should go to official Mysql documentation to mysqldump without password and modify script to support it

## Modify Script

You are free of modified the `mysql_backup.py` script to adapt to your needs.

> :books: The `mysql_backup.py` script is well documented. (maybe) :weary: