describe("cipher", () => {
  //letras maiusculas
  it("should be an object", () => {
    assert.equal(typeof cipher, "object");
  });

  describe("cipher.encode", () => {
    it("should be a function", () => {
      assert.equal(typeof cipher.encode, "function");
    });
    it("should return \"HIJKLMNOPQRSTUVWXYZABCDEFG\" for \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" with offset  33", () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it("should return \"TUVWXYZABCDEFGHIJKLMNOPQRS\" for \"ABCDEFGHIJKLMNOPQRSTUVWYXZ\" with offset - 33", () => {
      assert.equal(cipher.encode(-33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "TUVWXYZABCDEFGHIJKLMNOPQRS");
    });
    //letras minusculas
    it("should return \"tuvwxyzabcdefghijklmnopqrs\" for \"abcdefghijklmnopqrstuvwxyz\" with offset - 33", () => {
      assert.equal(
        cipher.encode(-33, "abcdefghijklmnopqrstuvwxyz"),
        "tuvwxyzabcdefghijklmnopqrs"
      );
    });
    it("should return \"hijklmnopqrstuvwxyzabcdefg\" for \"abcdefghijklmnopqrstuvwxyz\" with offset 33", () => {
      assert.equal(
        cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"),
        "hijklmnopqrstuvwxyzabcdefg"
      );
    });
    //caracteres não alfabeticos
    it("should return \" !@\" for \" !@\"", () => {
      assert.equal(cipher.encode(33, " !@"), " !@");
    });
  });

  describe("cipher.decode", () => {

    it("should be a function", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it("should return \"HIJKLMNOPQRSTUVWXYZABCDEFG\" for \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" with offset - 33", () => {
      assert.equal(cipher.decode(-33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it("should return \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" for \"HIJKLMNOPQRSTUVWXYZABCDEFG\" with offset 33", () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    //decode minuscula
    it("should return \"hijklmnopqrstuvwxyzabcdefg\" for \"abcdefghijklmnopqrstuvwxyz\" with offset -33", () => {
      assert.equal(
        cipher.decode(-33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg"
      );
    });
    it("should return \"abcdefghijklmnopqrstuvwxyz\" for \"hijklmnopqrstuvwxyzabcdefg\" with offset 33", () => {
      assert.equal(
        cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"),
        "abcdefghijklmnopqrstuvwxyz"
      );
    });

    //decode caractere não alfabetico
    it("should return \"!@\" para \" !@\"", () => {
      assert.equal(cipher.decode(33, " !@"), " !@");
    });
  });
});

