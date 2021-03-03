import pyautogui as p
import time
p.FAILSAFE = True

originX = 200
originY = 400
sOriginX = 200
sOriginY = 400
pause = 1

p.moveTo(sOriginX, sOriginY)
while p.position() != (0, 0):
    time.sleep(pause)
    x, y = p.position()
    file.write("vertex(x+ " + str(x - originX) + ", y+ " + str(y - originY) + ");\n")
    print(p.position())
    print("\n\n\n")