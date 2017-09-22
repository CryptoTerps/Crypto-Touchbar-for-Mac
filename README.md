# Crypto-Touchbar-for-Mac

Some people have mentioned wanting to donate so here's how if you'd like! :

1. Donate Ethereum: 0x6A1Dd21901D16a4CdF2A69CA2e8393b3e62d18c5
2. Donate Bitcoin: 1DoKTRb3XmQwcEtjLQq9Yb6SoeMBbnEBAr
3. Donate NEO: AL6gNUhvUFZ1ywYo3rPyNzojJXLPiJPcXz


![screenshot](https://github.com/CryptoTerps/Crypto-Touchbar-for-Mac/blob/master/Blockfolio%20Touchbar%20Screenshot.png)
![screenshot](https://github.com/CryptoTerps/Crypto-Touchbar-for-Mac/blob/master/ETH%20BTC%20NEO%20MTH%20prices.png)
![screenshot](https://github.com/CryptoTerps/Crypto-Touchbar-for-Mac/blob/master/BMC%2C%20MTH%20.png)

*This is an add-on (via Better Touch Tool) to get Cryptocurrency prices on your MacBook Touchbar 
- (v1.1 Supports Blockfolio Integration)
- (v1.2 Added Support for BlackMoon Crypto [BMC]) 


**Currently supported coins:**

- **Bitcoin** - Pulled from CryptoCompare.com API.
- **Ethereum** - Pulled from Cryptocompare.com API.
- **LiteCoin** - Pulled from Cryptocompare.com API.
- **Neo/USD** - Pulled from Cryptocompare.com API.
- **NEO/BTC** - Pulled from Bittrex.com API
- **Monetha** - Pulled from CryptoCompare.com API.
- **TenX** - Pulled from CryptoCompare.com API. 
- **OmiseGo** - Pulled from CryptoCompare.com API. 
- **Rise** - Pulled from CryptoCompare.com API.
- **Stox** - Pulled from CryptoCompare.com API.
- **Patientory** - Pulled from CryptoCompare.com API.
- **Stratis** - Pulled from CryptoCompare.com API.
- **0x Project** - Pulled from CryptoCompare.com API.
- **Adex** - Pulled from CryptoCompare.com API.
- **Tierion** - Pulled from CryptoCompare.com API. 
- **BlackMoon Crypto** - Pulled from CryptoCompare.com API. (Added v1.2)

# Installation

- Download and install [Better Touch Tool](https://www.boastr.net/downloads/). It allows you to modify your touch bar and customize various functions on your MacBook. 
- Right-click and download this file [CryptoTerps Touchbar.json](https://github.com/CryptoTerps/Crypto-Touchbar-for-Mac/blob/master/CryptoTerps%20TouchBar.json.zip) to your desktop.
- In your Mac's menu bar, click the Better Touch Tool icon `> Preferences`
- In the bottom left corner of the Better Touch Tool popup window, go to "Manage Presets".
- Click the "Import" button and select the `CryptoTerps Touchbar.json` file you downloaded. 
- **ENJOY!**


# Installation of Blockfolio Integration 

### Things you will need
 - [node JS](https://nodejs.org/) to run the script
 - Better Touch Tool to display the icons (which you already should have from the previous steps).
 - A mobile phone which has the Blockfolio application installed on it

 ### Setup steps
1. Install node version manager as explained here: https://github.com/creationix/nvm#installation
2. Do ```nvm install 8.4.0``` which will install version 8.4.0 of NodeJS on your Macbook. This is needed to execute the script that retrieves the information from Blockfolio API.
3. Clone the repository inside ```Documents``` directory on your Mac. Open terminal and execute these commands:
 - ```cd Documents```
 - ```git clone https://github.com/CryptoTerps/Crypto-Touchbar-for-Mac.git```
 - ```cd blockfolio-touchbar```
 - ```npm install```
 - ```chmod +x wrapper.sh```
4.  Open configuration.js in any text editor and change the deviceID to the one found in Blockfolio. You can see that in the app by opening it and navigating to upper right corner (the three vertical dots) and at the bottom. You can also "Copy your device ID".
5.  Download and install Better Touch Tool from here (If you already have BTT from the CryptoTerps Touchbar Application, skip step #5): https://www.boastr.net/downloads/ 
6. Once installed, open preferences from the menu bar icon. and go to Touch bar -> Manage Presets -> Import -> Select the blockfolio.json file that is part of this repo and now you should see the items in touch bar. It automatically adds to icons - one for dollar and one for euro pair, remove the one you don't need. If you cloned the repository in another location, then you will have to change paths in JSON file ```BTTTouchBarAppleScriptString``` attribute before importing them. 



# Notes:

- All values are in USD other than **NEO/BTC**
- All values (except for *Neo/BTC) taken from CryptoCompare.com - Market Price API. 
*Taken from Bittrex
- Bonus feature: If you click the button it will pull up the specific coin page on the Exchange.


# Customization

- In the Better Touch Tool preferences panel, you can add, delete, and rearrange the currencies by dragging/dropping.

# Acknowledgments

I am not the original author of the main script or Blockfolio integration. I merely improved, optimized, and extended it to support more cryptocurrencies and other features. 

The original idea came from [This Steemit Article](https://steemit.com/neo/@awesomemo/get-the-latest-price-of-neo-on-your-macbook-touchbar), [KrunkoSaurus' Github](https://github.com/krunkosaurus/bettertouchtool-crypto) and (Blockfolio Integration) from [Ezisezis' Github](https://github.com/ezisezis/blockfolio-touchbar) 

# History

- v1.0: Support for displaying USD value of BTC, ETH, LTC, NEO, OMG, TenX, Rise, PTOY, STRAT, ZRX, MTH, STX, ADX, TNT, LTC.
- v1.1: Added support for integration of Blockfolio Portfoilos to the touchbar 
- v1.2 Added support for BlackMoon Crypto (BMC/USD)

**IF YOU HAVE REQUESTS FOR NEW COINS, LET ME KNOW!**

Thanks to the original source here that my modified/optimized version is based on.
