import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function TodaysFood(props) {
  return (
    <div>
      <h1>
        <strong>Today's foods</strong>
      </h1>
      <h4>Total: {props.totalCalories}cal</h4>
    </div>
  );
}

export default TodaysFood;
