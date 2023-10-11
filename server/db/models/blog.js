'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Blog extends Model {
  }
  
  Blog.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};