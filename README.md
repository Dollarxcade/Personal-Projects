# Personal-Projects
Some of my side projects
## Weather Bot
> [!NOTE]
> This project is incomplete.

This project was an early attempt at building a Discord bot that could provide weather information directly within a Discord server. At the time, I couldn’t find a bot that met my needs, so I decided to try building one myself as a learning exercise.

The bot is no longer fully functional and does not currently provide weather data. Its only working feature is a basic “ping-pong” style response, meaning it no longer serves its original purpose as a weather bot. I also did not record the original development date and plan to update it if I revisit the project in the future.

Since then, I’ve found existing Discord bots (such as ZeroTwo and YAGPDG) that handle weather features more reliably. Because of this, I don’t plan to continue development on this project, but it remains a useful snapshot of my early experience working with Discord bots and APIs.

## Silvaria Draft System
> [!CAUTION]
> This script *can* break Google Sheets. Use at your own discretion.

The Silvaria Draft System was an attempt to automate team creation for a simulated Valorant round-robin league hosted in Google Sheets. The spreadsheet contains a large player database and advanced simulation logic, and this project focused specifically on implementing a snake draft system to fairly assign players to teams.

To accomplish this, I wrote a Google Apps Script using JavaScript, leveraging my existing JavaScript background. While I successfully implemented a basic draft mechanism, the script only functioned correctly for the first round. Additionally, due to unexpected interactions with Google Sheets, the script began generating tens of thousands of rows automatically, severely impacting performance and stability.

Because of these limitations and the difficulty of working around Google Sheets’ quirks the script was ultimately abandoned. I decided to reimplement the draft logic using native Google Sheets functions instead. As of the last update, this alternative approach remains a work in progress.

## Inventory Management System
> [!NOTE]
> This was made for a computer repair store I used to work at. Therefore, features in this code is made specifically for that. 

This project is a custom-built inventory management system designed specifically for a computer repair shop where I previously worked. The system was tailored to match real operational needs, rather than being a general-purpose inventory tracker.

The inventory is divided into two distinct categories: items under repair and items intended for sale. Each category has its own specialized fields. Repair inventory includes details such as repair cost, repair status, and associated customer contact information, allowing technicians to track progress and easily communicate updates once a repair is completed or if further information is needed. Sales inventory, on the other hand, tracks fields like purchase price, selling price, and sale status to support resale operations.

All inventory entries can be edited after being added, making it easy to update repair progress, pricing, or status changes over time. The system also allows customer contact details to be stored directly with repair items, streamlining follow-ups and improving workflow efficiency.

The application was built to work specifically with Firebase as its backend for data storage and management. While the core logic can be adapted, using a different backend service would require modifying the data-handling portions of the code.

## VDC League Simulation Script
> [!NOTE]
> This was made for a specific Valorant league that I participated in. Although the code is fairly simple and the tiebreaker logic is very similar to other Valorant leagues and VCT so if you have coding knowledge it's fairly simple to fix.

The **VDC Simulation Script** is a Python-based league simulator created specifically for a Valorant league called **VDC**. It simulates the outcome of an entire season by combining **real past match results** with **simulated future matches**.

The league uses a **round-robin Best-of-2** format, meaning matches can end in ties on each matchday. For unplayed matches, the script applies a **50/50 match outcome logic** to simulate future results based on existing match structure rather than team strength modeling.

Comments are included throughout the code to show where values can be edited to support **Best-of-3** formats. While the script was designed for a specific league, its overall structure is similar to many other Valorant leagues and can be adapted by adjusting the relevant values and inputs.

### Limitations
- Designed **only for Valorant**
- Assumes the **MR13 format** (first to 13 rounds)
- Does **not** simulate overtime for future matches
- May require adjustments to fully support other leagues or formats

---

## How to Use

### 1. Install Required Software
- Download **Visual Studio Code**:  
  [VS Code Download](https://code.visualstudio.com/download)
- Install the **Python extension for VS Code**:  
  [Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

---

### 2. Prepare the Match Data
Create a spreadsheet with the following columns:

1. Home Team  
2. Away Team  
3. Home Team Total Rounds Won  
4. Away Team Total Rounds Won  

- Leave both “Rounds Won” columns empty for **unplayed future matches**
Example format:  
  ![Spreadsheet Example](https://i.imgur.com/hxjtEDJ.png)

Export the spreadsheet as a **CSV file**.

---

### 3. Run the Simulation
1. Download the `VDC Simulation.py` file
2. Place it in the **same folder** as your CSV file
3. Open the `.py` file in **VS Code**
4. Edit the input filename near the top of the script  
   (default: `simulation.csv`)
5. Click the **▶ Run** button in the top-right corner of VS Code

---

### 4. View Results
- Simulation results will appear in the **VS Code console**
- A new **CSV file** containing the simulated standings/results will be created in the same folder as the script

*Last updated 2025-12-26*
