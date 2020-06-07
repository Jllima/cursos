# GET e SET
class Carro
  def initialize(nome = "Padrão")
    @nome = nome
  end
  
  attr_accessor :nome
  
  # def nome=(value)
  #   @nome = value
  # end
  
  # def nome
  #   @nome
  # end  
end

carro = Carro.new

p carro.nome