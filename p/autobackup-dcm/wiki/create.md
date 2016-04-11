---
layout: page
permalink: /p/autobackup-dcm/wiki/create/
menu: true
title: Create Script
description: Simple python script to auto backup, rotate backup and upload to google drive.
github-url: dacopan/autobackup-dcm
github-ribbon: |    
    <a class="ribbon" href="https://github.com/dacopan/autobackup-dcm"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
---

# Create Your Own Backup Script
Easy creation of extensible modules to create your custom backup script

Please see example included in autobackup-dcm :package:

:fire: To developing:

## 1. Create a python script in `scripts` folder
   The script name should be as describe in name convention `backupType_backup.py` for
example: `mysql_backup.py`

## 2. Create a config file in `config` folder
   
   The script name should be as describe in name convention  `backupType_config.json` for
example: `mysql_config.json`

### 2.1. Put basic JSON structure as described in [setup wiki](https://github.com/dacopan/autobackup-dcm/wiki/Setup)
   and put your custom configuration required by your script inside `custom` JSON object
   
   > Remember that this configuration file is an array of JSON Objects `apps` to backup.
   
   > All applications defined in this array must have the same structure
    
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
            "last_week": 0,
            "last_year": 0,
            "last_day": 0,
            "last_month": 0
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
            "custom_filed1":"custom_value1",
            "custom_filed2":"custom_value3",
        }
    }    
    ]
```

### 3. Develop Script

  - First, import libraries required to code your script, then import `GenericBackupCM`
    ```python
            # Modules included in our package.
            from core.generic_backup import GenericBackupCM
    ```
   
  - Now define things required as logging and path to config file (created in 2.):
    ```python
            #logging
            log = logging.getLogger('dacopancm.YourScriptName')
            # replace YourScriptName to your script name for example (dacopancm.mysql)
            
            # constants
            CONFIG_FILE = '../config/YourScriptName_config.json'
            # replace YourScriptName to your script name for example (mysql_config.json)
    ```
   
  - Create a `class` that extends from `GenericBackupCM`                    
    ```python
            class MysqlBackupCM(GenericBackupCM):
                def __init__(self):
                    super().__init__(log, CONFIG_FILE)
    ```
            
     The `GenericBackupCM` read and parse config file, iterate over array of apps to backup defined in config file and call to function `do_backup`
     that must be implemented in your script. This function receive 2 parameters: `app` that contains all configuration defined in JSON object
     and the parameter `backup_type` if it is `DAILY, WEEKLY, MONTHLY or YEARLY`.
     
  - Define function `do_backup` in your script     
     In `do_backup` function you should insert your logic to create backup file and then call `upload_backup` function defined in parent class, and then return `True` or `False`  
 
    ```python
            def do_backup(self, app, backup_type):
                # backup_file name must have the tiemstamp ex. jom_2016-03-28_09-17_yearly
                filestamp = time.strftime('%Y-%m-%d_%H-%M') 
                backup_file = '{}{}_{}_{}.{}'.format(app['cfg']['local_backup_dir'], app['cfg']['app_name'], filestamp,
                                                 backup_type,
                                                 'gz')
                backup_created = # here your logic to create backup
                if backup_created:
                    return self.upload_backup(app, backup_file)
    ```
   
### 4. That's all folks! :alien: