#!/usr/bin/env python
# coding: utf-8

# In[1]:


import warnings
warnings.filterwarnings('ignore')


# In[2]:


# Initial imports
import pandas as pd
import numpy as np
from pathlib import Path
from collections import Counter
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, MinMaxScaler,OneHotEncoder
import os
from sklearn.metrics import balanced_accuracy_score
from sklearn.metrics import confusion_matrix
from imblearn.metrics import classification_report_imbalanced
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
# import tensorflow as tf
# from tensorflow.keras.callbacks import ModelCheckpoint
from sklearn.metrics import classification_report



# In[3]:


#  Import and read the csv file(s)
#file_path = "../Mod20_Group_Challenge/iris.csv"
wine_df=pd.read_csv("../resources/ML/ml_master_table.csv", encoding='latin1')


# In[4]:


# Pull in top keywords
keywords = ['ripe', 'crisp', 'bright', 'dry', 'full', 'sweet', 'fresh', 'earthy', 'bitter', 'aftertaste']
for k in keywords:
    wine_df[k] = wine_df.description.apply(lambda x : 1 if x.find(k)>-1 else 0)


# In[5]:


# Drop the non-beneficial ID columns, 'Description'.
wine_df=wine_df.drop(columns=['description', 'wine_id', 'province_id', 'country_id', 'winery_id'])


# In[6]:


point_counts=wine_df.points.value_counts()
point_counts


# In[7]:


def getPoints(points):
    if(points <= 85):
        return '1'
    elif(points<=90):
        return '2'
    elif(points<=95):
        return '3'
    elif(points<=100):
        return '4'
    else:
        return 'If this gets hit, we did something wrong!'


# In[8]:


wine_df['Points'] = wine_df['points'].apply(getPoints)


# In[10]:


price_counts=wine_df.price.value_counts()
price_counts


# In[11]:


# Determine which values to replace if counts are less than ..?
replace_price = list(price_counts[price_counts < 2500].index)

# Replace in dataframe
for pri in replace_price:
    wine_df.price= wine_df.price.replace(pri,"Other")
    
# Check to make sure binning was successful
wine_df.price.value_counts()


# In[12]:


variety_counts=wine_df.variety.value_counts()
variety_counts


# In[13]:


# Determine which values to replace if counts are less than ..?
replace_variety = list(variety_counts[variety_counts < 2000].index)

# Replace in dataframe
for var in replace_variety:
    wine_df.variety= wine_df.variety.replace(var,"Other")
    
# Check to make sure binning was successful
wine_df.variety.value_counts()


# In[15]:


country_counts=wine_df.country_name.value_counts()
country_counts


# In[17]:


# Determine which values to replace if counts are less than ..?
replace_country = list(country_counts[country_counts < 2000].index)

# Replace in dataframe
for coun in replace_country:
    wine_df.country_name= wine_df.country_name.replace(coun,"Other")
    
# Check to make sure binning was successful
wine_df.country_name.value_counts()


# In[18]:


wine_df['Points']=wine_df['Points'].astype(int)


# In[19]:


wine_df['price']=wine_df['price'].astype(str)


# In[ ]:


# wine_df = wine_df.drop(columns=['province', 'title', 'winery', 'taster_name'], axis=1) 


# In[21]:


# Generate our categorical variable lists
wine_cat=wine_df.dtypes[wine_df.dtypes =="object"].index.tolist()


# In[22]:


wine_df[wine_cat].nunique()


# In[23]:


# Create a OneHotEncoder instance
enc = OneHotEncoder(sparse=False)

# Fit and transform the OneHotEncoder using the categorical variable list
wine_encode_df = pd.DataFrame(enc.fit_transform(wine_df[wine_cat]))
wine_encode_df.columns = enc.get_feature_names(wine_cat)


# In[24]:


# Add the encoded variable names to the dataframe
wine_df = wine_df.merge(wine_encode_df,left_index=True, right_index=True)
wine_df = wine_df.drop(wine_cat,1)


# In[25]:


# # drop unnecessary columns province, region_1, region_2, taster_twitter_handle, title, variety and winery. 
wine_df = wine_df.drop(columns=['points']) 
# # del wine_df['winery']
# # # hot encoding for country and taster name as they are limited categories. 
# wine_df = pd.get_dummies(wine_df, columns=['country', 'price', 'variety'])


# In[27]:


wine_df.to_csv(r'../data_cleaning/ML_data2.csv', index=False)


# In[28]:


wine_df.dtypes


# In[29]:


# Split our preprocessed data into our features and target arrays
y = wine_df["Points"].values
X = wine_df.drop(["Points"],1).values

# Split the preprocessed data into a training and testing dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=78)


# In[30]:


# Create a StandardScaler instances
# scaler = StandardScaler()

# # Fit the StandardScaler
# X_scaler = scaler.fit(X_train)

# # Scale the data
# X_train_scaled = X_scaler.transform(X_train)
# X_test_scaled = X_scaler.transform(X_test)


# In[31]:


clf = RandomForestClassifier(random_state=1).fit(X_train, y_train)
print(f'Training Score: {clf.score(X_train, y_train)}')
print(f'Testing Score: {clf.score(X_test, y_test)}') 


# In[32]:


from sklearn.metrics import accuracy_score


# In[33]:


# Create a random forest classifier.
rf_model = RandomForestClassifier(n_estimators=128, random_state=78)

# Fitting the model
rf_model = rf_model.fit(X_train, y_train)

# Evaluate the model
y_pred = rf_model.predict(X_test)
print(f" Random forest predictive accuracy: {accuracy_score(y_test,y_pred):.3f}")


# In[34]:


# Calculating the confusion matrix
cm = confusion_matrix(y_test, y_pred)
cm_df = pd.DataFrame(
    cm, index=["FINE", "GOOD", "VERY GOOD", "EXCEPTIONAL"])

# Calculating the accuracy score
acc_score = accuracy_score(y_test, y_pred)


# In[35]:


# Displaying results
print("Confusion Matrix")
display(cm_df)
print(f"Accuracy Score : {acc_score}")
print("Classification Report")
print(classification_report(y_test, y_pred))


# In[ ]:




