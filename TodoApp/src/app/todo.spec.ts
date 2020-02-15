import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
});


it('accept values',()=>
{
  let todo=new Todo({
    title:'Hello',
    complete:true
  });

  expect(todo.title).toEqual('ello');
  expect(todo.complete).toEqual(true);

});