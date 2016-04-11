---
layout: page
menu: true
title: Wiki
description: Simple python script to auto backup, rotate backup and upload to google drive.
github-url: dacopan/autobackup-dcm
github-ribbon: |    
    <a class="ribbon" href="https://github.com/dacopan/autobackup-dcm"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
---

# Installation and Configuration

> AutoBackup DcM is ver easy of install and setup. :poop:

- Download
- Configure Google Drive
- Configure Modules
- Configure Logging (optional)
- Configure Cron (optional)
- Enjoy! :alien:

## Download 
 - You only need download or clone this repository and place it where you like
 - Then, you must create a project in Google Developer console
 
## Configure Google Drive
 - Use this [wizard](https://console.developers.google.com/start/api?id=drive) to create or select a project 
 in the Google Developers Console and automatically turn on the API. Click **Continue**, then **Go to credentials**.
 - At the top of the page, select the **OAuth consent screen tab**. Select an **Email address**, enter a **Product name** 
 if not already set, and click the **Save** button.
 - Select the **Credentials** tab, click the **Add credentials** button and select **OAuth 2.0 client ID.**
 - Select the application type Other, enter the name "Drive API Quickstart", and click the Create button.
 - Click **OK** to dismiss the resulting dialog.
 - Click the <i class="fa fa-cogs"></i> (Download JSON) button to the right of the client ID.
 - Move this file to the `config` directory and rename it to **google-client_secret.json**.
  
## Configure Modules
The `scripts` folder contains the `scripts` for different types of backups.
At this moment `AutoBackup DcM` only comes by default with a script for` Mysql`.
 
> Each script has a backup configuration file.
 
By convention backup scripts are composed by `backupType_backup.py` which It corresponds to a configuration file 
such as `backupType_config.json`.

For example the script `mysql_backup.py` has a configuration file named `mysql_config.json`
 
Please go to corresponding module to see in detail its JSON configuration file.

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
      
    }
  },
	  {}
]
```

Key | Type |Mandatory| Description
--- |---|:---:|---
**cfg** |JSON Object|:+1:| General configuraion of app
local_backup_dir |String|:+1:| Path to your local backup dir
remote_backup_dir |String|:+1:| Google Drive folder id. Can retrieve it from Google drive url of your folder, or use our script gdrive_utils.py included in AutoBackup DcM
google_credentials_name |String|:+1:|The name of Json file to store acces token of Google Drive. Generally `AppName_google_credentials.json`
app_name |String|:+1:| Your app name without spaces, will be used as prefix of backups files
google_authorized |Boolean|:+1:| If false, the next run of script will be paused until user enter google credentials. Use only in setup. Not use `True` during a cron job 
|||  
**bk**|JSON Object|:+1:| Save the timestamp of last sucess bakcup. Set all to `0` in first run, or when you want force to script to create other backup 
last_year |Integer|:+1:| If `0` the nex run of script a yearly backup will be execute
last_month |Integer|:+1:|If `0` the nex run of script a monthly backup will be execute
last_week |Integer|:+1:|If `0` the nex run of script a weekly backup will be execute
last_day |Integer|:+1:|If `0` the nex run of script a daily backup will be execute
|||
**rotate**|JSON Object|:+1:| Your Rotate policy
*local*|JSON Object|:+1:| local rotate policy 
*remote*|JSON Object|:+1:| remote rotate policy
daily, weekly, monthly, yearly | Integer or `always`|:+1:| number of backups to preserve during rotation
|||
include_list|JSON Array|:+1:| A list of strings with `python fnmatch` patterns. If a nonempty include list is specified each backup must match a pattern in the include list, otherwise it will be ignored  
exclude_list|JSON Array|:+1:| A list of strings with `python fnmatch` patterns. If a backup matches the exclude list it will be ignored, *even if it also matched the include list* (it's the only logical way to combine both lists).
dry_run|Boolean|:+1:| If this is ``True`` then no changes will be made, which provides a 'preview' of the effect of the rotation scheme.
ionice|String|:+1:| Use ``ionice`` to set the I/O scheduling class (expected to be one of the strings 'idle', 'best-effort' or 'realtime').
|||
**custom**|JSON Object|:+1:| Custom configuraions to backup module Please go to corresponding module to see in detail its JSON configuration.

 
## Configure Logging (optional)
 
There is optional, only contains confguration relative to `logfiles` of `Python API`
**All keys are mandatory**
  
Principal keys:
  
Key |Description
--- | --- 
format | Format of log output
datefmt | Format of the datetime in log
level | Logging Level `[DEGUB, INFO, WARNING, ERROR]`
`dacopancm` | this is the logger used to all modules and scripts 
`filename` | path to log file should be created

> If you need, please refer to the official Python documentation to properly configure logging system.


## Configure Cron (optional)

 If you run Linux please refer to the official documentation of `CRON` command
example:

```bash
ln -s "/etc/cron.daily/mysql_backup.py" "/path/to/autobackup-dcm/scripts/mysql_backup.py"
```