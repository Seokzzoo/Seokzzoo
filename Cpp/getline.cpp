#include <iostream>
using namespace std;

int main() {
  string s;
  // getline -> 문자열을 한꺼번에 받음
  // getline은 기본적으로 개행 문자('\n')를 줄의 끝으로 인식하고 그 개행 문자직전까지 입력을 받음
  getline(cin, s);
  cout << s << endl;
  return 0;
}