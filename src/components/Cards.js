import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>The Real Problem When It Comes to Diversity and Asian-Americans</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text=<center>The model minority mindset is a stereotype that suggests
              that certain minority groups, particularly Asian Americans, 
              have achieved a higher level of success than other minority 
              groups in the United States due to their hard work, education, 
              and adherence to traditional cultural values. </center>

              label='Model Minority'
              path='/model'
            />
            <CardItem
              src='images/img-12.jpg'
              text=<center>The perpetual foreigner is another harmful stereotype
              that suggests that Asian Americans are not "real" Americans 
              and are viewed as outsiders or foreigners, regardless of how
              long they or their families have lived in the United States.</center> 
              label='Perpetual Foreigner'
              path='/perpetual'
            />

<CardItem
              src='images/img-13.jpg'
              text= <center>Take the Quiz</center>
              label='Quiz'
              path='/quiz'
            />

          </ul>
          <ul className='cards__items'>
          
           

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
