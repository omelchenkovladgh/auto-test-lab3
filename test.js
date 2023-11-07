const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Matrix = require('./matrix');

chai.use(sinonChai);
const expect = chai.expect;

describe('Matrix', () => {

    it('#1 Створення матриці', () => {
        const matrix = new Matrix(2);
        matrixMock = sinon.mock(matrix);
        matrixMock.restore();

        matrixMock.expects('get_matrix').returns([[1, 2],[5, 8]]);
        expect(matrix.get_matrix(3)).to.deep.equal([[1, 2],[5, 8]]);

        matrixMock.verify();
    });

    it('#2 Робота методу друку', () => {
        const matrix = new Matrix(2);
        matrixMock = sinon.mock(matrix);
        matrixMock.restore();

        matrixMock.expects('printm');
        matrix.printm();
        
        matrixMock.verify();
    });

    it('#3 Отримання значення рядка', () => {
        const matrix = new Matrix(3,6);
        matrixMock = sinon.mock(matrix);
        matrixMock.restore();

        matrixMock.expects('get_rows').returns(3);
        const rows = matrix.get_rows();
        expect(rows).to.equal(3);
        
        matrixMock.verify();
    });

    it('#4 Отримання значення з матриці за позицією', () => {
        const matrix = new Matrix(3,3);
        matrixMock = sinon.mock(matrix);
        matrixMock.restore();

        matrixMock.expects('get').withArgs(1, 2).returns(42);

        const value = matrix.get(1, 2);

        expect(value).to.equal(42);
        matrixMock.verify();
    });
});
