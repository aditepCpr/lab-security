install :

- burpsuite
- Proxy SwitchyOmega
- sqlmap

CA Certificate :

http://burp/

# วิธีทำ

POST

- เปลี่ยน port : Proxy SwitchyOmega
- เปิด burp suite
  - เข้า tap proxy
    - เข้า tap options
    - เปลี่ยน port ให้เหมือน Proxy SwitchyOmega
  - เปิด tab intercept
    - intercept on
- ปรับ Proxy SwitchyOmega ให้ใช้ Proxy
- run ส่วนที่อยาก hack
- เปิด burp suite
  - เข้า tap proxy
    - HTTP history
      - คลิกขวา send to repeater
    - เข้า tap repeater
    - save file
- sqlmap
  - cmd : python sqlmap.py -r filename.txt -p parameter -v 4
    ex. python sqlmap.py -r forgot.txt -p email -v 4

```
show log
python sqlmap.py -r filename.txt -p parameter  -v 4


check
python sqlmap.py -r filename.txt -p parameter


database name
python sqlmap.py -r filename.txt -p parameter --dbs --batch
```
