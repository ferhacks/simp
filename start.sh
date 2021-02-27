#!/usr/bin/env bash

if [ -z "$DBCONFIG" ]; then
  echo "You must specify the Dropbox access token!. I would recommend using dropbox."
  exit 1
fi

# Download dropbox uploader config file
echo "-----> Configuring DU config file..."
echo OAUTH_ACCESS_TOKEN=$DBCONFIG > .dropbox_uploader
echo " done"

# Installing Dropbox sync
echo "-----> Adding Dropbox Sync..."
curl "https://raw.githubusercontent.com/andreafabrizi/Dropbox-Uploader/master/dropbox_uploader.sh" -o dropbox_uploader.sh
mv dropbox_uploader.sh backup.sh
chmod +x backup.sh
# ./dropbox_uploader.sh help to list all options
# more info here https://github.com/andreafabrizi/Dropbox-Uploader
echo " done"

echo "-----> Starting Dropbox Sync..."
./backup.sh download backup.zip 
unzip backup
rm backup.zip
eval "while true; do sleep 300; ./backup.sh delete backup.zip; zip -r backup world world_nether world_the_end mstore plugins server.properties bukkit.yml spigot.yml paper.yml banned-ips.json banned-players.json whitelist.json permissions.yml ops.json; ./backup.sh upload backup.zip /; rm backup.zip; done &"
echo " done"
dropbox_pid=$!

eval "screen -L -h 2048 -dmS minecraft ./bashh.sh"
main_pid=$!

echo "-----> Loading libraries... "

echo "-----> Loading completed ..."

echo "-----> Instalation completed <-----"

echo "-----> Hope you enjoy server <-----"
# Flush the logfile every second, and ensure that the logfile exists
screen -X "logfile 1" && sleep 1

echo "Tailing log"
#eval "tail -f screenlog.0 &"
tail_pid=$!
