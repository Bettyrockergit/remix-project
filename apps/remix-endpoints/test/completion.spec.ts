import chai from 'chai';
import axios from 'axios';
import { describe, it } from 'mocha';
import https from 'https';

const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false // This will ignore SSL certificate errors
    })
});

const API_URL = 'https://127.0.0.1:1025';

describe('completion', () => {
    it('function add 3 numbers completion', async () => {
        const postData = {
            data: [
                "pragma solidity 0.8.0 //function add 3 numbers\n",
                "code_completion",
                "",
                false,
                200,
                1,
                0.8,
                50
            ]
        };

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000,  // total request time including connection setup
        };

        const response = await axiosInstance.post(`${API_URL}/completion/`, postData, config)
        console.log(response.data);
        // TODO: add more assertions
        chai.expect(response.data.data[0]).not.to.be.empty;
        chai.expect(response.data.is_generating).to.equal(false);
    });
    it('"What are function modifiers solidity_answer', async () => {
        const postData = {
            data: [
                "What are function modifiers",
                "solidity_answer",
                false,
                5,
                1,
                0.8,
                50
            ]
        };

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000,  // total request time including connection setup
        };

        const response = await axiosInstance.post(`${API_URL}/solcoder/`, postData, config)
        console.log(response.data);
        // TODO: add more assertions
        chai.expect(response.data.data[0]).not.to.be.empty;
        chai.expect(response.data.is_generating).to.equal(false);
    });
})