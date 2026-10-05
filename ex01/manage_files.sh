
#!/bin/bash

touch draft.txt

echo "My First line in the draft" > draft.txt
echo "My Second line in the draft" >> draft.txt

cat draft.txt

cp draft.txt draft_backup.txt
mv draft_backup.txt final_report.txt

touch temp.txt
rm temp.txt


