import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:8000/api'

interface Product {
  name: string;
  image: string;
  price: number;
  stock: boolean;
}

export const productService = {
  async getAllProducts (): Promise<Product[]> {
    try {
      const response = await axios.get(`${API_URL}/products`)
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },

  async getProductById (id: string): Promise<Product> {
    try {
      const response = await axios.get(`${API_URL}/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error)
      throw error
    }
  },

  async addProduct (product: Product): Promise<Product> {
    try {
      const response = await axios.post(`${API_URL}/products/add`, product)
      return response.data
    } catch (error) {
      console.error('Error adding product:', error)
      throw error
    }
  },

  async updateProduct (id: string, product: Product): Promise<Product> {
    try {
      const response = await axios.put(`${API_URL}/${id}`, product)
      return response.data
    } catch (error) {
      console.error(`Error updating product with id ${id}:`, error)
      throw error
    }
  },

  async deleteProduct (id: string): Promise<void> {
    try {
      await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
      console.error(`Error deleting product with id ${id}:`, error)
      throw error
    }
  }
}
