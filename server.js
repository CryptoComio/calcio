const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const DATA_FILE = path.join(__dirname, 'state.json');

app.use(express.json({limit:'10mb'}));

async function readState(){
  try{
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  }catch(e){
    return {};
  }
}

async function writeState(st){
  await fs.writeFile(DATA_FILE, JSON.stringify(st, null, 2));
}

app.get('/api/state', async (req,res)=>{
  res.json(await readState());
});

app.post('/api/state', async (req,res)=>{
  await writeState(req.body || {});
  res.json({ok:true});
});

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('Server running on http://localhost:'+PORT);
});
