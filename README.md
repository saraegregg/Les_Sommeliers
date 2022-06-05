# Mod20_Group_Challenge

## Project Overview: Wine Quality Prediction
The goal of this project is to predict quality of wine by utilizing a dataset highlighting over 130,000 individual wine entries with factors such as region, province, price, points (quality), description, variety, and designation. The project will utilize a supervised machine learning approach to predict points (indicating wine quality from 80-100) by incorporating many of the factors included above. The project will also build a dashboard and/or interactive map to illustrate wine quality and price by region and province as well as highlight top wineries by location. The dashboard could be beneficial for restaurant owners seeking to build a comprehensive and well-rounded wine offering and the map could be helpful for travel agents and/or individual consumers seeking high quality wine on the road.

## Exploratory Data Analysis and Data Cleaning
Initial processing began with removing the specialty characters from the original Winemag.csv file so that the NLP in the machine learning model would be able to recognize words such as "creme brulee" or "creme anglaise", and regions with special characters (eg. Rias Baixas) could still be included in our initial data analysis.

We created a Jupyter Notebook (data_week1 found in the data_cleaning folder) with code that imports the dataset by reading in the wine_data.csv and removes unnecesary columns. Then we view the measures of central tendency and create box and whisker plots to understand the spread of the numerical data. Additional preliminary visualizations show the countries represented and the relative number of wines each provided to the dataset.

![Number of Wines by Country](/Images/No_wines_by_co.png)
![Points Box and Whisker Plot](/Images/Points_baw.png)
![Wines and Their Points](/Images/Wines_and_points.png)
![Prices Box and Whisker Plot](/Images/Price_baw.png)
![Wines and Ther Prices](/Images/Wines_and_prices.png)


## Database Overview and ERD
Final database processing produced six individual tables, on which several SQL joins were completed to prepare and export the final csv (ml_master_table.csv found in data_cleaning). This data file will be used to build our machine learning model.

![Wine_ERG](https://github.com/saraegregg/Mod20_Group_Challenge/blob/7b38e36570db772ee8d9019c6624737123fa9cb2/Images/database_schema_with_relationships.png)


## Key Visualizations for Dashboard
The following dashboard for this project, highlights several findings including: 

- Average Points by country
- Average Price for Top US Wineries
- Price and points value
- Price and Point Value with Labels
- Price and Points by Top Varieties
- Average Price and Points by Country
- Wine Quality Storyboard

[WINE QUALITY DASHBOARD](https://public.tableau.com/views/FinalProjectStory_16543538908720/AveragePriceandPointsbyCountry?:language=en-US&:display_count=n&:origin=viz_share_link) 

## Mapping with Leaflet
In addition to the Tableau Dashboard, the Sommeliers are creating an interactive map that will show the winery location for the top 20 reasonable priced (<$100) wines. This is intended to help wine enthusiasts plan travel and vacation itineraries to experience the worlds top wines! Progress thus far includes an API call for lat/long and an initial map with tile layers and layer groups.

![](/Images/APIcall.png)
![](/Images/APIcall2.png)
![](/Images/Mappingv1.png)

## NLP to Parse Description
In Google Colab, we used a Spark Session to explore the relationship between the frequency of words and the point value of wine by doing the following:
- Tokenize the data to create new column with all of the words of the description of the wine
- Remove Stop Words from new column created when data was tokenized
- Running HashingTF to see frequency of words
- Export parsed dataframe to a clean csv

Once parsed to a clean dataframe, the team reviewed the top 50 most common words included in the description, and selected ten to include as features in our machine learning model. 

## Machine Learning Component Overview 
Using supervised machine learning, by way of a Random Forest Classfier model, we will predict point value classification (our target) using a specified set of features and utilizing several techniques such as:
- Conversion of categorical values to numerical using OneHot Encoder
- Bucketing or binning of feature data values to reduce the number of unique variables in each feature selection list
- Removal of non-essential columns such as Region, Title, Winery, Taster Name, and Taster Twitter Handle
- Dissection of dataset into training and testing groups
- Calculating a confusion matrix to assign target value predictions of Fine, Good, Very Good, and Exeptional.

![ML](https://github.com/saraegregg/Mod20_Group_Challenge/blob/2ab0190fe76067d6ff9a9ddd7a6b1a1f714f352a/Images/ML_initial.png)


