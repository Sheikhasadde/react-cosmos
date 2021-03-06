import { hideSingleChildDirs } from './hideSingleChildDirs';

it('hides one single-child root dir', () => {
  const tree = {
    dirs: {
      dir0: {
        dirs: {},
        items: {
          foo: {
            path: 'foo',
            name: null
          }
        }
      }
    },
    items: {}
  };
  expect(hideSingleChildDirs(tree)).toEqual({
    dirs: {},
    items: {
      foo: {
        path: 'foo',
        name: null
      }
    }
  });
});

it('hide all single-child root dirs', () => {
  const tree = {
    dirs: {
      dir0: {
        dirs: {
          dir1: {
            dirs: {
              dir2: {
                dirs: {},
                items: {
                  foo: {
                    path: 'foo',
                    name: null
                  }
                }
              }
            },
            items: {}
          }
        },
        items: {}
      }
    },
    items: {}
  };
  expect(hideSingleChildDirs(tree)).toEqual({
    dirs: {},
    items: {
      foo: {
        path: 'foo',
        name: null
      }
    }
  });
});
