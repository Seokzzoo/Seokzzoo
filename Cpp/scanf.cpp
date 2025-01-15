#include <iostream>
using namespace std;

int main() {
  int a;
  double b;
  char c;
  // scanf는 첫번째 매개변수로 받는 형식을 지정해서 입력을 받음
  // %d -> int, %c -> char, %s -> string, %lf -> double, %ld -> longlong
  scanf("%d %lf %c", &a, &b, &c);
  cout << a << endl;
  cout << b << endl;
  cout << c << endl;

  return 0;
}