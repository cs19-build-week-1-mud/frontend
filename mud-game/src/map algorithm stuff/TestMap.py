
rooms = [
    {
        "model": "adventure.room",
        "pk": 1,
        "fields": {
            "title": "Outside Cave Entrance", "description": "North of you, the cave mount beckons",
            "n_to": 2,
            "s_to": 0,
            "e_to": 0,
            "w_to": 0}
    },

    {"model": "adventure.room", "pk": 3, "fields": {
        "title": "Grand Overlook", "description": "A steep cliff appears before you, fallingninto the darkness. Ahead to the north, a light flickers innthe distance, but there is no way across the chasm.", "n_to": 0, "s_to": 2, "e_to": 0, "w_to": 0}},

    {"model": "adventure.room", "pk": 2, "fields": {
        "title": "Foyer", "description": "Dim light filters in from the south. Dustynpassages run north and east.", "n_to": 3, "s_to": 1, "e_to": 4, "w_to": 0}},

    {"model": "adventure.room", "pk": 4, "fields": {
        "title": "Narrow Passage", "description": "The narrow passage bends here from westnto north. The smell of gold permeates the air.", "n_to": 5, "s_to": 0, "e_to": 0, "w_to": 2}},

    {"model": "adventure.room", "pk": 5, "fields": {
        "title": "Treasure Chamber", "description": "You've found the long-lost treasurenchamber! Sadly, it has already been completely emptied bynearlier adventurers. The only exit is to the south.", "n_to": 0, "s_to": 4, "e_to": 0, "w_to": 0}}
]

f = open("TestRooms.html", "w")

divs = ""

# via waypoints problem

for room in rooms:  # 1-5

    # title = ", ".join([value for key, value in room["fields"] if key == "title"])

    title = room["fields"]["title"]

    num = room['pk']
    containerStyle = "display: grid; grid-gap: 50px;"

    style = "display: flex; align-items: center; justify-content: center; width: 150px; height: 80px; border-radius: 100%;"

    style += "background-color: orange; font-size: 25px; color: navy; text-align: center;"


    if num == 1:
        # 1 10
        style += "grid-column-start: 1; grid-column-end: 2; grid-row-start: 3; grid-row-end: 4;"
        
    elif num == 2:
        # 2 30
        style += "grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 3;"
    elif num == 3:
        # 3 50
        style += "grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 2;"
    elif num == 4:
        # 2 30
        style += "grid-column-start: 2; grid-column-end: 3; grid-row-start: 2; grid-row-end: 3;"
    elif num == 5:
        # 3 50
        style += "grid-column-start: 2; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2;"    
    
    div = f"<div style=\"{style}\" id=\"{room['pk']}\"># {num}</div>"
    
    divs += div

    inContainer = f"<div style=\"{containerStyle}\"> {divs} </div>"


f.write(inContainer)
