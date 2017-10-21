'use strict';

const request= require('supertest');
const expect =require('expect');
var {app}=require('../server');

describe('GET /hello/pablo',()=>{
    it('expect HTTP responde 200',(done)=>{
        request(app)
            .get('/hello/pablo')
            .expect(200,done);
    });
});