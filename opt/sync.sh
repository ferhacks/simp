# Installing Dropbox sync

echo "-----> Adding Dropbox Sync..."

curl "https://raw.githubusercontent.com/andreafabrizi/Dropbox-Uploader/master/dropbox_uploader.sh" -o dropbox_uploader.sh

mv dropbox_uploader.sh backup.sh

chmod +x backup.sh

# ./dropbox_uploader.sh help to list all options

# more info here https://github.com/andreafabrizi/Dropbox-Uploader

echo " done"



#echo "-----> Updating IP to afraid.org/dnsexit.com..."

#eval "while true; do sleep 120; curl http://freedns.afraid.org/dynamic/update.php?VmU3eXhjV0MzMTZxNVNCaEhxVXZLVndrOjE2OTg3ODEz; done &"

#eval "while true; do sleep 120; wget "http://update.dnsexit.com/RemoteUpdate.sv?login=kimbang012&password=kimbang012&host=sv.mineshift.linkpc.net"; done &"

#eval "while true; do sleep 120; wget "http://update.dnsexit.com/RemoteUpdate.sv?login=kimbang012&password=kimbang012&host=mineshift.linkpc.net"; done &"

#eval "while true; do sleep 120; wget "http://api.dynu.com/nic/update?hostname=mineshift.dynu.net&username=kimbang012&password=07f32eef1cbf2e8c2887631d5d1e2032"; done &"



echo "-----> Starting Dropbox Sync..."

./backup.sh download backup.zip 

unzip backup

rm backup.zip

eval "while true; do sleep 300; ./backup.sh delete backup.zip; zip -r backup lib; ./backup.sh upload backup.zip /; rm backup.zip; done &"

echo " done"

dropbox_pid=$!
