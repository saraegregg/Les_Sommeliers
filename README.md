# Mod20_Group_Challenge

## Project Overview: Wine Quality Prediction
The goal of this project is to predict quality of wine by utilizing a dataset highlighting over 130,000 individual wine entries with factors such as region, province, price, points (quality), description, variety, and designation. The project will utilize a regression machine learning approach to predict points (indicating wine quality from 80-100) by incorporating many of the factors included above. The project will also build a dashboard and/or interactive map to illustrate wine quality and price by region and province. it may also highlight top winery's by location. The dashboard could be beneficial for restaurant owners seeking to build a comprehensive and well-rounded wine offering and the map could be helpful for travel agents and/or individual consumers seeking high quality wine on the road.

## Communication Protocols
Our team will continue to communicate via our Slack message in order to divide work, ask questions, clarify instructions, and colaborate. Our standing Friday meeting on Microsoft Teams will be moved to Saturday when schedules conflict. Team members may organize additional web meetings as necessary either through the group Slack or by direct messaging each other.

## Exploratory Data Analysis and Data Cleaning
First of all, we removed the specialty characters from the original Winemag csv file so that the NLP in the machine learning would be able to recognize words like "creme brulee" or "creme anglaise", and regions with special characters (eg. Rias Baixas) could still be included in our analysis.

In the data_cleaning folder of our repository, we have created a Jupyter Notebook (data_week1) with code that imports the dataset by reading in the wine_data.csv and removes unnecesary columns. Then we view the measures of central tendency and create box and whisker plots to understand the spread of the numerical data. Additional preliminary visualizations show the countries represented and the relative number of wines each provided to the dataset.

![Number of Wines by Country](/Images/No_wines_by_co.png)
![Points Box and Whisker Plot](/Images/Points_baw.png)
![Wines and Their Points](/Images/Wines_and_points.png)
![Prices Box and Whisker Plot](/Images/Price_baw.png)
![Wines and Ther Prices](/Images/Wines_and_prices.png)


## Database Overview and ERD
![Wine_ERG](https://user-images.githubusercontent.com/96449605/168492777-9f993359-80bb-4937-acab-99ac405b6316.png)


## Key Visualizations for Dashboard
The following is an example dashboard for this project, which primarily highlights average points and price with a few different perspectives: 

![](/Images/PracticeDashboard.png)


The following is a bar chart showing the average points for the wineries with the most wines:

![](/Images/TopWineriesAvePoints.png)

Additional visualizations that may be beneficial for this project include: 
- Heatmap of wine volumes by region or country
- Interactive map with markers showing average wine price and points and winery with highest quality wine
- Price and points by variety and designation
- Most common variety by volume
- Interactive dashboard in which the user can filter by country or region and see top wineries, top wines, and price

## NLP to Parse Description
In Google Colab, we are going to use a Spark Session to explore the relationship between the frequency of words and the point value of wine by doing the following:
- Tokenize the data to create new column with all of the words of the description of the wine
- Remove Stop Words from new column created when data was tokenized
- Running HashingTF to see frequency of words
- Export parsed dataframe to a clean csv

## Machine Learning Component Overview 
Using supervised machine learning we will attempt to predict point values(target) using a specified set of features and utilizing several techniques such as:
- Conversion of categorical values to numerical
- Bucketing or binning of target variable output
- Removal of non-essential columns
- Dissection of dataset into training and testing groups
- Resampling, oversampling, undersampling, or combination thereof as the project warrants
- Linear regression
![ML](https://github.com/saraegregg/Mod20_Group_Challenge/blob/2ab0190fe76067d6ff9a9ddd7a6b1a1f714f352a/Images/ML_initial.png)

