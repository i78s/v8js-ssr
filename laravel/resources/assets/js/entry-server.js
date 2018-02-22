import { createApp } from './main';
renderVueComponentToString(createApp(), (err, res) => {
  print(res);
});
