'use strict';

angular.module('csvSessionsMock', [])
  .value('mockSessionsData', [{'key':'2015-06-28','values':[{'id':3,'start':'2015-06-28 03:26:18','end':'2015-06-28 05:26:18','transId':'3','transStart':'2015-06-28 05:26:18','transEnd':'2015-06-28 05:27:18','total':90,'$$hashKey':'object:14'}],'$$hashKey':'object:8'},{'key':'2015-06-27','values':[{'id':2,'start':'2015-06-27 02:26:18','end':'2015-06-27 04:26:18','transId':'2','transStart':'2015-06-27 04:26:18','transEnd':'2015-06-27 04:27:18','total':30,'$$hashKey':'object:16'}],'$$hashKey':'object:9'},{'key':'2015-06-26','values':[{'id':1,'start':'2015-06-26 01:26:18','end':'2015-06-26 03:26:18','transId':'1','transStart':'2015-06-26 03:26:18','transEnd':'2015-06-26 03:27:18','total':101,'$$hashKey':'object:18'}],'$$hashKey':'object:10'}])
  .value('mockSessionsLink', 'data:application/csv;charset=utf-8,Sample%20Reference%20Initiative%0A2015-03-09%20to%202015-07-09%0A%20Report%0A2015-06-28%0AID,Session%20Start,Session%20End,Transaction%20Start,TransactionEnd,Total%0A3,2015-06-28%2003:26:18,2015-06-28%2005:26:18,2015-06-28%2005:26:18,2015-06-28%2005:27:18,90%0A%0A%0A%0A2015-06-27%0AID,Session%20Start,Session%20End,Transaction%20Start,TransactionEnd,Total%0A2,2015-06-27%2002:26:18,2015-06-27%2004:26:18,2015-06-27%2004:26:18,2015-06-27%2004:27:18,30%0A%0A%0A%0A2015-06-26%0AID,Session%20Start,Session%20End,Transaction%20Start,TransactionEnd,Total%0A1,2015-06-26%2001:26:18,2015-06-26%2003:26:18,2015-06-26%2003:26:18,2015-06-26%2003:27:18,101%0A%0A%0A%0A');