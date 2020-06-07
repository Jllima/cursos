require 'byebug'
# h = { name: "Jane", age: 17 }

# p true.class, false.class
# p "Ruby".class
# p 1.class
# p 4.5.class
# p 3_463_456_457.class
# p :age.class
# p [1, 2, 3].class
# p h.class
# const
X = 3
# var global
$c = 4
class Teste
  
  def initialize
    # var instance
    @a = 1
  end
  # var class
  @@b = 2

  def met
    p @a
    p @@b
    p X
    p $c
  end
end

Teste.new.met
