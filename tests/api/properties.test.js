'use strict';

var test = require('tape');
const request = require('supertest');
const app = require('../../server');
const expect = require('chai').expect;
const mockData = require('../../exerciseData');

describe('properties list api', () => {
    it('returns a list of properties when call made to \'/api/properties\'', (done) => {
        request(app)
            .get('/api/properties')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(err).to.equal(null);
                expect(res.body).to.deep.equal(mockData);
                done();
            });
    });

    it('returns 404 and error message if user hits unhandled endpoint', (done) => {
        request(app)
            .get('/unicorn')
            .expect('Content-Type', /json/)
            .expect(404)
            .end((err, res) => {
                expect(err).to.equal(null);
                expect(res.body).to.deep.equal({ err: 'Unprocessable request' });
                done();
            });
    });
});

