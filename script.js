function encryptString(stringToEncrypt, difficultyLevel) {
    return SHA256(JSON.stringify(stringToEncrypt)).toString();
  }
  