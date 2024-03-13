import numpy as np
import matplotlib.pyplot as plt

def sinusoidal_positional_encoding(d, pos):
    encoding = np.zeros((d,))
    for i in range(d):
        if i % 2 == 0:
            encoding[i] = np.sin(pos / (10000 ** (i / d)))
        else:
            encoding[i] = np.cos(pos / (10000 ** ((i - 1) / d)))
    return encoding

def visualize_encoding_3d(d):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    positions = np.arange(0, 300, 1)
    encodings = np.array([sinusoidal_positional_encoding(d, pos) for pos in positions])

    ax.scatter(encodings[:, 0], encodings[:, 1], encodings[:, 2], c=positions, cmap='viridis')
    ax.set_xlabel('Dimension 1')
    ax.set_ylabel('Dimension 2')
    ax.set_zlabel('Dimension 3')
    ax.set_title('Sinusoidal Positional Encoding in 3D')

    plt.show()

# 3차원에 시각화하는 예시
visualize_encoding_3d(3)