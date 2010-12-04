#include <iostream>
#include <string>
#include <boost/flyweight.hpp>
using namespace std;

int main()
{
    boost::flyweight<string> s( "foo" );
    boost::flyweight<string> t( "foo" );
    boost::flyweight<string> u( s.get() + t.get() );
    boost::flyweight<string> v( "foofoo" );

    cout << &s.get() << endl;
    cout << &t.get() << endl;
    cout << &u.get() << endl;
    cout << &v.get() << endl;
}



