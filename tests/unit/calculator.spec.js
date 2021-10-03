import Calculator from '@/lib/calculator'

describe('test Calculator', () => {
  it('1 + 1 should == 2', () => {
    expect(Calculator.sum(1,1)).toEqual(2)
  })

  it('3 + 4 should == 7', () => {
    expect(Calculator.sum(3,4)).toEqual(7)
  })

  it('2 * 8 should == 16', () => {
    expect(Calculator.multiply(2,8)).toEqual(16)
  })

})
