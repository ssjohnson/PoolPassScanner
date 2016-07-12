# PoolPassScanner

PoolPassScanner is a program I created to track member entry into a pool area, designed to be used with ID cards, and a barcode scanner. 

The program asks whether a resident or guest pass is about to be scanned, and then waits for an ID number to be entered (or scanned in via barcode scanner) and logs it on a log file. If no picture of a resident is associated with the guest in the filesystem, the program will then ask that a picture be taken via attached webcam (if one is present). 

If a guest pass is chosen, the attendant will scan or enter the guest pass information, and then the amount of guests can be chosen by the attendant. This is stored in a seperate log.


