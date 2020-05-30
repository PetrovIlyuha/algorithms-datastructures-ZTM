// Hash table
// My implementation
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let storedKey = this._hash(key);
    this.data[storedKey] = value;
    return [storedKey, value];
  }
  get(key) {
    let retrievalKey = this._hash(key);
    return this.data[retrievalKey];
  }
}

let newHashTable = new HashTable(50);

// console.log(newHashTable.set("swine", 100));
// console.log(newHashTable.set("sars", 1000));
// console.log(newHashTable.set("coronavirus", 200));
// console.log(newHashTable.set("coronavirus", 200));
// console.log(newHashTable.get('coronavirus'));
// console.log(newHashTable);

// Andrei's implementation
class HashTable1 {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      this.data[address].push([key, value]);
    }
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const newHash1 = new HashTable1(1000);
newHash1.set("Tokyo", 38001000);
newHash1.set("Shanghai", 23740778);
newHash1.set("Sao Paulo", 21066245);
newHash1.set("Mexico", 20998543);
newHash1.set("Beijing", 20383994);
console.log(newHash1.keys());
