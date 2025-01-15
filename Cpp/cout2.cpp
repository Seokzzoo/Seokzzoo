#include <iostream>
#include <iomanip>
using namespace std;
typedef long long ll;
double a = 1.23456789;

int main() {
  cout << a << endl;
  cout << fixed << setprecision(3) << a << endl; // 소수점 세 자리까지 반올림
  cout << fixed << setprecision(8) << a << endl; // 소수점 여덟 자리까지 반올림
  return 0;
}