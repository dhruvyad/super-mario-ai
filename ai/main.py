import random
import gradio as gr
from llm_backend import response_function

demo = gr.ChatInterface(response_function)

if __name__ == "__main__":
    demo.launch()
