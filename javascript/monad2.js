


(function(){

//unit: a -> M[b]
var unit = function(value){
    var ret = (value.call)  ? value : 
              (value.value) ? value.value : function(){return value}
    return {
        value : ret
    };
};
//bind: M[a] -> (a->M[b]) -> M[b]
var bind = function(m,proc){
    return unit(function(){ return proc( m.value() ).value() });
};

// func a->M[b]
var x2 = function(x){return unit(x*x)};
var inc = function(x){return unit(x+1)};

print( unit(10).value());
print( unit(unit(10)).value())
print( bind(unit(10),x2).value());
print( bind( bind(unit(10),x2),inc).value());

//return a >>= f ≡ f a
print( bind( unit(10) , x2 ).value(), x2(10).value());
//m >>= return ≡ m
print( bind( unit(10) , unit ).value(),unit(10).value());

//(m >>= f) >>= g ≡ m >>= (\x -> f x >>= g)
print(
    bind( bind( unit(10) , x2 ) ,inc ).value(),
    bind( unit(10) , function(x){ return bind( x2(x) ,inc)}).value()
);


var process = [inc,inc,x2,x2,inc];
var m = unit(1);
process.forEach(function(e){
    m = bind( m , e );
});
print("before evaluate");
print(m.value());
print("afater evaluate")

})();
