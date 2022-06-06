# The Sommeliers

## Project Overview: Wine Quality Prediction
The goal of this project is to predict quality of wine utilizing a dataset comprised of over 130,000 individual wine entries and includes factors such as region, province, price, points (quality), description, variety, and designation. The project will implement a supervised machine learning approach to predict quality (categorized into four ranges based on points values) incorporating many of the factors included above. The project will incorporate a dashboard and/or interactive map to illustrate wine quality and price by region and province as well as highlight top wineries by location. This data seeks to aid restaurant owners seeking to build a comprehensive and well-rounded wine offering while the map could be beneficial for travel agents and/or individual consumers seeking high quality wine on the road.

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
- Price and Points by Top Varieties
- Average Price by Country

[WINE QUALITY DASHBOARD](https://public.tableau.com/shared/Z8NXQCCPY?:display_count=n&:origin=viz_share_link)

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

## Machine Learning Component 
Using supervised machine learning, by way of a Random Forest Classfier model, we predict point value classification (our target) using a specified set of features and utilizing several preprocessing techniques. Our machine learning journey consisted of:
### Data preprocessing
- For data preprocessing we read in an initially cleaned csv of our wine data set.
### Feature engineering, feature selection, and the decision-making process
- Based on initial review of our cleaned data set and our NLP parsed description column, we selected the features we felt would best contribute to a solid classification of wine selection. These features included country, variety of wine, price, and our selection of 10 most used descriptive words from our parsed description column. We pulled our 10 descriptive words into our dataframe using a for loop and lambda function to create a column for each descriptive word.
- Bucketing or binning of feature data values to reduce the number of unique variables in each feature selection as well as our target output
- Removal of non-essential columns such as Region, Title, Winery, Taster Name, and Taster Twitter Handle
### How data was split into training and testing sets
- Our data was split into training and testing sets using sklearn library functionality in python. 
### Model choice including limitations and benefits
- We chose the Random Forest Classifier model since most of our data was text rather than numeric and thus had to be converted by way of OneHotEncoder instance. This model produced the best accuracy score of all the ones built and tested (Linear Regression, LASSO, logistic Regression, and Neural Network). While we were able to build this classifier model using a function that set our target values into buckets, we may have preferred to utilize those target values individually for prediction. However, given that the text data needed to be converted to numeric (and there were 20 points’ values along with 13 features)it feels as though this model may have performed better with a smaller data set or fewer features. We elected to change our model from linear regression to classifier as it appeared to work better with the amount and type of data contained within the dataset. Given the number of rows and the features we felt needed to stay in the model, putting our target output into ranges and switching to a classifier model felt like the best choice. Classification falls into four categories : Fine, Good, Very Good, and Exceptional.
### Model Training
- Using the standard 75/25 training and testing parameters, we trained our model on 72315 rows and tested on the remaining 24105 rows.
- We also did some dropping of columns to further test the model and try to increase our accuracy scores, but this did not benefit us.
### Current Accuracy Score
- Our current accuracy score stands at around 62%. Based on our confusion matrix, this overall score could be slightly skewed as it appears a large number of points values fall within the “Good” category range containing assigned point values of 85-90.


![ML](https://github.com/saraegregg/Mod20_Group_Challenge/blob/18b929c7ab5ce643665469ae907d1d551aa79c10/Images/ML%20ModelFinal1.png)

![ML_CM](https://github.com/saraegregg/Mod20_Group_Challenge/blob/18b929c7ab5ce643665469ae907d1d551aa79c10/Images/ML%20FinalCMpng.png)

## Flask Application
To showcase what our team built and what we learned about our dataset, the team built a Flask application with several routes. The target audience for the web app are people who work in wine control roles in the restaurant service and supply industries: wine buyers and sellers, bar and restaurant managers and wine directors.  The homepage is a landing that directs users to three routes, each of which allows these individuals to learn more about different wines in unique ways. The first route directs to a filterable table that displays the first 100 wines in our database that meet all of the filter requirements and includes the full description given by the Sommelier. The second route directs to a tool that allows users to input wine features and receive a prediction of the wine quality by applying our machine learning model to the inputs. The final route directs to an interactive Tableau dashboard that explores the highest scoring wines around the world and the top wineries in the United States. 

![route 1](/Images/route1.png)
![route 2](/Images/route2.png)
![route 3](/Images/route3.png)

The code for this is housed in the following GitHub repository: (https://github.com/jenv5507/wine)