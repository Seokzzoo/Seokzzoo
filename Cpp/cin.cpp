#include <iostream>
using namespace std;

int main() {
  string a;
  cin >> a; // 개행문자 직전까지만 입력을 받음
  cout << a << endl; // "바보 바보" 입력하면 "바보" 출력
  return 0;
}