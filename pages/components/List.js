import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const List = () => {
  const myArray = [
    83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8,
  ];
  const [result, setResult] = useState({
    question: "",
    value: "",
  });

  /** Fucntions ***/
  function countElements(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        count++;
      }
    }

    return count;
  }

  function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }

  function findGreatestNumber(arr) {
    let greatest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > greatest) {
        greatest = arr[i];
      }
    }
    return greatest;
  }

  function findDuplicateNumbers(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.lastIndexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  }

  function countOddAndEvenNumbers(arr) {
    let oddCount = 0;
    let evenCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return { oddCount, evenCount };
  }

  function separateOddAndEvenNumbers(arr) {
    let oddNumbers = "";
    let evenNumbers = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers += arr[i] + " ";
      } else {
        oddNumbers += arr[i] + " ";
      }
    }
    return { oddNumbers, evenNumbers };
  }

  return (
    <>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <li className={styles.listQuestion}>
          <p>Jumlah Inputan / Variable Himpunan Bilangan Asli</p>
          <button
            onClick={() => {
              const _result = countElements(myArray);
              setResult({
                question: "Jumlah Inputan / Variable Himpunan Bilangan Asli = ",
                value: _result,
              });
            }}
          >
            Lihat Hasil
          </button>
        </li>
        <li className={styles.listQuestion}>
          <p>Anggota terkecil dari Inputan / Variable Himpunan Bilangan Asli</p>
          <button
            onClick={() => {
              const _result = findSmallestNumber(myArray);
              setResult({
                question:
                  "Anggota terkecil dari Inputan / Variable Himpunan Bilangan Asli = ",
                value: _result,
              });
            }}
          >
            Lihat Hasil
          </button>
        </li>
        <li className={styles.listQuestion}>
          <p>Anggota terbesar dari Inputan / Variable Himpunan Bilangan Asli</p>
          <button
            onClick={() => {
              const _result = findGreatestNumber(myArray);
              setResult({
                question:
                  "Anggota terbesar dari Inputan / Variable Himpunan Bilangan Asli = ",
                value: _result,
              });
            }}
          >
            Lihat Hasil
          </button>
        </li>
        <li className={styles.listQuestion}>
          <p>
            Cari anggota dari Inputan / Variable Himpunan Bilangan Asli dengan
            nilai angka sama dan lebih dari satu
          </p>
          <button
            onClick={() => {
              const _result = findDuplicateNumbers(myArray);
              console.log("hasil di dup", _result);
              setResult({
                question:
                  "Cari anggota dari Inputan / Variable Himpunan Bilangan Asli dengan nilai angka sama dan lebih dari satu = ",
                value: `${_result[0]} dan ${_result[1]}`,
              });
            }}
          >
            Lihat Hasil
          </button>
        </li>
        <li className={styles.listQuestion}>
          <p>
            Jumlah bilangan ganjil dan bilangan genap ada berapa jumlahnya
            masing-masing
          </p>
          <button
            onClick={() => {
              const _result = countOddAndEvenNumbers(myArray);
              setResult({
                question: "Jumlah bilangan ganjil dan bilangan genap = ",
                value: `${_result.oddCount} dan ${_result.evenCount}`,
              });
            }}
          >
            Lihat Hasil
          </button>
        </li>
        <li className={styles.listQuestion}>
          <p>
            Tampilan anggota himpunan bilangan asli dalam kelompok bilangan
            ganjil dan bilangan genap
          </p>
          <button
            onClick={() => {
              const _result = separateOddAndEvenNumbers(myArray);
              setResult({
                question:
                  "Tampilan anggota himpunan bilangan asli dalam kelompok bilangan ganjil dan bilangan genap = ",
                value: `Bilangan ganjil: ${_result.oddNumbers}, Bilangan genap: ${_result.evenNumbers}`,
              });
            }}
          >
            Lihat Hasil
          </button>
        </li>
      </ul>

      <h2>
        <p>Hasil :</p>
        <p>
          {result.question} {result.value}
        </p>
      </h2>
    </>
  );
};

export default List;
