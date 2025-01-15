#include <iostream>
using namespace std;

// 타입의 이름을 새로이 별칭으로 정의하고 실제 타입이름 대신 별칭으로 사용
typedef int i;

int main() {
  i a = 1;
  cout << a << '\n';
  return 0;
}