from phue import Bridge
from tkinter import *
import tkinter as tk
from tkinter import ttk
from tkinter import simpledialog
from tkinter import messagebox
import random
import time
from PIL import Image, ImageTk

#link bridge 
b = Bridge('192.168.0.151')
b.connect()
b.get_api()


#Function defs

#LIVING ROOM FUNCTIONS
def livingroom_on():
    b.set_group(3,'on',True)

def livingroom_off():
    b.set_group(3,'on',False)


def livingroom_dimmer():
    #new window
    new_window = Tk()
    new_window.title("Dimmer Window")
    new_window.geometry('200x200')
    scale = Scale(new_window, from_=0, to=254)
    scale.grid(row=1,column=1)
    current_bright=b.get_group(3, 'bri')
    scale.set(current_bright)


    def get_scale():
        brightness=scale.get()
        brightness=int(brightness)
        print(brightness)
        scale_get.grid(row=2,column=1)
        b.set_group(1,'on',True) #turn on lights
        b.set_light(6, 'bri', brightness) #adjust brighntess
        b.set_light(5, 'bri', brightness)


    scale_get = tk.Button(new_window, text="Okay", command=get_scale)
    scale_get.grid(row=2,column=1)

#SALMAN BEDROOM FUNCTIONS
def salmanroom_on():
    b.set_group(1,'on',True)

def salmanroom_off():
    b.set_group(1,'on',False)

def salman_dimmer():
    #new window
    new_window = Tk()
    new_window.title("Dimmer Window")
    new_window.geometry('200x200')
    scale = Scale(new_window, from_=0, to=254)
    scale.grid(row=1,column=1)
    current_bright=b.get_group(1, 'bri')
    scale.set(current_bright)


    def get_scale():
        brightness=scale.get()
        brightness=int(brightness)
        print(brightness)
        scale_get.grid(row=2,column=1)
        b.set_group(1,'on',True) #turn on lights
        b.set_light(2, 'bri', brightness) #adjust brighntess
        b.set_light(4, 'bri', brightness)
        b.set_light(1, 'bri', brightness)
        b.set_light(7, 'bri', brightness)

    scale_get = tk.Button(new_window, text="Okay", command=get_scale)
    scale_get.grid(row=2,column=1)




def salman_party():    
    global decider
    decider = simpledialog.askstring("Input", "Enter 1 to start حفلة مود , Enter 0 stop:")
    decider=int(decider)
    
    x=decider
    while x>0:
        b.set_light(2,'xy',[random.random(),random.random()])
        b.set_light(4,'xy',[random.random(),random.random()])
        b.set_light(1,'xy',[random.random(),random.random()])
        b.set_light(7,'xy',[random.random(),random.random()])
        



def party_window():
    new_window = Tk()
    new_window.title("حفلة Window")
    party_button = tk.Button(new_window, text="حفلة مود", command=salman_party)
    party_button.pack()
    def stop_party():
        global decider
        decider=1
    stop_button = tk.Button(new_window, text="stop حفلة مود", command=stop_party)
    stop_button.pack()


#AHMED BEDROOM FUNCTION
def ahmedroom_on():
    b.set_group(4,'on',True)

def ahmedroom_off():
    b.set_group(4,'on',False)

def ahmed_dimmer():
    #new window
    new_window = Tk()
    new_window.title("Dimmer Window")
    new_window.geometry('200x200')
    scale = Scale(new_window, from_=0, to=254)
    scale.grid(row=1,column=1)
    current_bright=b.get_group(4, 'bri')
    scale.set(current_bright)
    
    def get_scale():
        brightness=scale.get()
        brightness=int(brightness)
        print(brightness)
        scale_get.grid(row=2,column=1)
        b.set_group(4,'on',True) #turn on lights
        b.set_light(8, 'bri', brightness) #adjust brighntess


    scale_get = tk.Button(new_window, text="Okay", command=get_scale)
    scale_get.grid(row=2,column=1)


#ALL LIGHTS FUNCTION
def all_on():
    b.set_group(1,'on',True)
    b.set_group(3,'on',True)
    b.set_group(4,'on',True)

def all_off():
    b.set_group(1,'on',False)
    b.set_group(3,'on',False)
    b.set_group(4,'on',False)

#COLORS FUNCTION
def color_window():
    new_window = Tk()
    new_window.title("Color Window")
    
    label = ttk.Label(new_window, text="Select a Room:")
    label.pack()
    
    rooms = {
        'Salmans Bedroom': ['1', '2', '4', '7'],
        'Living Room': ['Light 5', 'Light 6'],
        'Afros Bedroom': ['Light 8']
    }

    selected_room = ttk.Combobox(new_window, values=list(rooms.keys()))
    selected_room.pack(padx=10, pady=10)   
    selected_value = selected_room.get()
    print(selected_value)
    b.set_light('selected_value','xy',[0.640, 0.330])

#MAIN WINDOW
root=Tk()
root.title("Smart Home Control")

#frm = ttk.Frame(root, padding=10)
#frm.grid()



#LIVING ROOM LABELS
lv_label = tk.Label(root, text="Living Room", fg='#5f43b2')
lv_label.grid(row=0, column=0)

lv_on_b = tk.Button(root, text="ON", command=livingroom_on,width=7)
lv_on_b.grid(row=1, column=1)

lv_of_b = tk.Button(root, text="OFF", command=livingroom_off,width=7)
lv_of_b.grid(row=2, column=1)

lv_dim_b = tk.Button(root, text="Dimmer", command=livingroom_dimmer,width=7)
lv_dim_b.grid(row=3,column=1)

#SALMAN BEDROOM LABELS
sb_label = tk.Label(root, text="Salmans Bedroom",fg='#5f43b2')
sb_label.grid(row=4, column=0)

sb_on_b = tk.Button(root, text="ON", command=salmanroom_on,width=7)
sb_on_b.grid(row=5, column=1)

sb_of_b = tk.Button(root, text="OFF", command=salmanroom_off,width=7)
sb_of_b.grid(row=6, column=1)

sb_dim_b = tk.Button(root, text="Dimmer", command=salman_dimmer,width=7)
sb_dim_b.grid(row=7, column=1)

sb_party_b = tk.Button(root, text="حفلة مود", command=party_window,width=7)
sb_party_b.grid(row=8, column=1)

#AHMED BEDROOM LABELS
ab_label = tk.Label(root, text="Afro Bedroom", fg='#5f43b2')
ab_label.grid(row=9, column=0)

ab_on_b = tk.Button(root, text="ON", command=ahmedroom_on,width=7)
ab_on_b.grid(row=10, column=1)

ab_of_b = tk.Button(root, text="OFF", command=ahmedroom_off,width=7)
ab_of_b.grid(row=11, column=1)

ab_dim_b = tk.Button(root, text="Dimmer", command=ahmed_dimmer,width=7)
ab_dim_b.grid(row=12,column=1)

#ALL LIGHTS LABELS
all_label = tk.Label(root, text="All lights",fg='#5f43b2')
all_label.grid(row=13, column=0)

all_on_b = tk.Button(root, text="ON", command=all_on,width=7)
all_on_b.grid(row=14, column=1)

all_of_b = tk.Button(root, text="OFF", command=all_off,width=7)
all_of_b.grid(row=15, column=1)

#COLORS LABELS  
colors_label = tk.Label(root, text="Change Colors",fg='#5f43b2')
colors_label.grid(row=16, column=0)

colors_b = tk.Button(root, text="Colors", command=color_window,width=7)
colors_b.grid(row=16, column=1)

#OVERVIEW
overview_label = tk.Label(root, text="Overview",fg='#5f43b2')
overview_label.grid(row=17, column=0)

#img1=PhotoImage(file='IMG_6384.png')
#img_b = tk.Button(root, image=img1)
#img_b.grid(row=17,column=1)
root.mainloop()



