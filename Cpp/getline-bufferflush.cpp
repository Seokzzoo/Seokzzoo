#include <iostream>
#include <string>
using namespace std;

int main() {
  int T;
  // string bufferflush;
  string s;
  // getline(cin, bufferflush);
  // 또는
  cin >> T;
  cin.ignore();

  for (int i = 0; i < T; i++) {
    getline(cin, s);
    cout << s << endl;
  }
  return 0;
}