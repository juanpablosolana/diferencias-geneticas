import mutation from "../../pages/api/mutation";

test('peticion POST',()=>{
  const req = {
    method: 'POST',
    body: {
      dna: ['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']
    }
  }
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
    end: jest.fn().mockReturnThis()
  }
  mutation(req,res)
  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.send).toHaveBeenCalledWith('mutation')
})